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


handlers = {
  "info": (node, accuData, workflow) ->
    elem = $('<div>').html(template)
    elem.find(".stage-title").text(node.title)
    elem.find(".stage-text").text(node.text)
    elem
    
}


Processed.NodeToHtml = (node, accuData, workflow) ->
  if not node?
    elem = $('<div>').html(template)
    console.error("Node not defined!")
  
  else if node.type? and node.type of handlers
    elem = handlers[node.type](node, accuData, workflow)
  
  else if node.type?
    console.error("Treating unknown node type '%s' as 'info': %o", node.type, node)
    elem = handlers["info"](node, accuData, workflow)
  
  else
    elem = $('<div>').html(template)
    console.error("Invalid node object ", node)
  
  # we return the 0th elem because we want to return something independent of 
  # jQuery
  elem[0]
  
