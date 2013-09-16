
module 'Processed'



class Processed.FlowNode
  constructor: (containerid, x=10, y=10) ->
    @id = uuid.v1()
    @inlets = []
    @outlets = []
    @myTitle = ""
    @myDesc = ""
    @elem = $("<div>")
      .attr('id', @id)
      .addClass("FlowNode").addClass("_box")
      .html("<p>FlowNode</p>")
      .css("top", y+"px").css("left", x+"px")
      .dblclick( @edit )
    
    # This is a pain. We have to do this here otherwise 
    # it doesn't work. We would rather add it somewhere else, but
    # nevermind
    $(containerid).append(@elem)
    
    jsPlumb.draggable(@id)
    @elem.resizable()

  title: (title) ->
    if title?
      @myTitle = title
    @elem.html("<p>"+@myTitle+"</p>")
    @myTitle

  description: (desc) ->
    if desc?
      @myDesc = desc
    @myDesc

    
  addSource: (name) ->
    jsPlumb.addEndpoint(
      @id,
      sourceEndpoint,
      {anchor: "BottomCenter", uuid:@id+":"+name}
    )
  addTarget: (name) ->
    jsPlumb.addEndpoint(
      @id,
      targetEndpoint,
      {anchor: "TopCenter", uuid:@id+":"+name}
    )

  edit: () ->
    console.log "editing not supported"
# edit uses the function that creates the dialogue, ->

class Processed.InformNode extends Processed.FlowNode
  constructor: (container, x=50, y=50) ->
    super container, x, y
    @addSource "out"
    @addTarget "in"

class Processed.StartNode extends Processed.FlowNode
  constructor: (container, x=50, y=50) ->
    super container, x, y
    @addSource "out"
    @elem.html("<p>Start</p>")
    console.log @elem

  edit: ()->
    console.log @elem
    @elem.html("<p>"+"foo"+"</p>")

class Processed.EndNode extends Processed.FlowNode
  constructor: (container, x=50, y=50) ->
    super container, x, y
    @addTarget "in"
    @elem.html("<p>End</p>")

Processed.nodeTypes = {
  "Start": Processed.StartNode,
  "End": Processed.EndNode,
  "Inform": Processed.InformNode
}
