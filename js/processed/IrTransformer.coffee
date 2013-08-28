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
choiceHandler = (node, accuData, workflow, callback) ->
  elem = $('<div>').html(template)
  
  if node.title? 
    elem.find(".stage-title").text(node.title)
  
  if node.text? 
    elem.find(".stage-text").text(node.text)
  
  for choice in node.choices

    if callback? and choice.target?
      clickCallback = do ( target = choice.target ) ->
        callback(target)
    else
      clickCallback = null
      console.error("Error processing choice node (%o). Missing target for choice!", node)

    elem.find(".stage-choices").append(
      $('<a>')
        .addClass("target")
        .text(choice.text)
        .click(clickCallback)
    )
  
  elem # return the element
  


# Convert an inform node to a choice node
inform_to_choice = (node) ->
  node = $.extend(true, {}, node)
  node.type = "choice"
  node.choices = [{text: "Continue", target: node.target}]
  delete node.target
  node

# Convert an inform node and environment into an HTMLElement
informHandler = (node, accuData, workflow, callback) ->
  choiceHandler(inform_to_choice(node), accuData, workflow, callback)


handlers = {
  "inform": informHandler,
  "choice": choiceHandler
}


Processed.NodeToHtml = (node, accuData, workflow, callback) ->
  if not node?
    elem = $('<div>').html(template)
    console.error("Node not defined!")
  
  else if node.type? and node.type of handlers
    elem = handlers[node.type](node, accuData, workflow, callback)
  
  else if node.type?
    console.error("Treating unknown node type '%s' as 'inform': %o", node.type, node)
    elem = handlers["inform"](node, accuData, workflow, callback)
  
  else
    elem = $('<div>').html(template)
    console.error("Invalid node object ", node)
  
  # we return the 0th elem because we don't want to return a jQuery object
  elem[0]
  
