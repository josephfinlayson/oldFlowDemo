
itemMenuName = "#items"

elemChoiceCallback = (name) ->
  () -> 
    console.log name
    window.nodes.push(
      new Processed.nodeTypes[name]("#flowcontainer", 100,100)
    )
  

$.each(Processed.nodeTypes, (name, nclass) ->
  cb = do (nodeName = name) -> elemChoiceCallback(nodeName)
  item = $("<a>")
    .text(name)
    .click(cb)
  $(itemMenuName).append(item)
)


