root = exports ? window
if not root.Processed?
  root.Processed = {}
Processed = root.Processed


template = """

<div class="stage">
  <h1 class="stage-title"></h1>

  <div class="stage-text">
  </div>
  
  <div class="stage-options">
  </div>
  
  <div class="stage-choices">
  </div>
</div>


"""


# Convert a choice node and environment into an HTMLElement



#takes workflow - > renders page
Processed.handleWorkflow = (workflow, elementToModify = "body") ->
 html =  Processed.NodeToHtml(workflow[workflow._config.start], null, workflow, pageRenderer)
 $(elementToModify).html(html)

pageRenderer = (node, accuData, workflow, callback, elementToModify) ->
   html = Processed.NodeToHtml(node, null, workflow, callback, elementToModify)
   $(elementToModify).html(html)

choiceHandler = (node, accuData, workflow, callback, elementToModify) ->
  
  elem = $('<div>').html(template)
  
  if node.title? 
    elem.find(".stage-title").text(node.title)
  
  if node.text? 
    elem.find(".stage-text").text(node.text)
  
  for choice in node.choices
    if callback? and choice.target?
      clickCallback =  ( ) ->
        callback(workflow[choice.target], null, workflow, callback)
    else
      clickCallback = null
      console.error("Error processing choice node (%o). Missing target for choice!", node)

    link = $('<a>')
        .addClass("target")
        .text(choice.text)
        .click(clickCallback)

    
    if choice.class?
      $(link).addClass(choice.class)

    $(elem).find(".stage-choices").append(link)
  
  $(elem) # return the element
  


# Convert an inform node to a choice node
inform_to_choice = (node) ->
  node = $.extend(true, {}, node)
  node.type = "choice"
  node.choices = [{text: "Continue", target: node.target}]
  delete node.target
  node

# Convert an end node to a choice node
end_to_choice = (node) ->
  node = $.extend(true, {}, node)
  node.type = "choice"
  node.choices = [{text: "End", target: null}]
  delete node.target
  node

# Convert an inform node and environment into an HTMLElement
informHandler = (node, accuData, workflow, callback, elementToModify) ->
  # node = workflow[node]
  choiceHandler(inform_to_choice(node), accuData, workflow, callback, elementToModify)

# Convert an end node and environment into an HTMLElement
endHandler = (node, accuData, workflow, callback, elementToModify) ->
  # node = workflow[node]
  choiceHandler(inform_to_choice(node), accuData, workflow, callback, elementToModify)



handlers = {
  "inform": informHandler,
  "choice": choiceHandler
  "end" : endHandler
}


Processed.NodeToHtml = (node, accuData, workflow, callback, elementToModify) ->    
  console.log(node)
  if not node?
    elem = $('<div>').html(template)
    console.error("Node not defined!")
  
  else if node.type? and node.type of handlers
    elem = handlers[node.type](node, accuData, workflow, callback, elementToModify)
    console.log(elem)
  
  else if node.type?
    console.error("Treating unknown node type '%s' as 'inform': %o", node.type, node)
    elem = handlers["inform"](node, accuData, workflow, callback, elementToModify)
  
  else
    elem = $('<div>').html(template)
    console.error("Invalid node object ", node)
  
  # we return the 0th elem because we don't want to return a jQuery object
  elem[0]
  
