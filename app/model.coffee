
module 'Processed'

Processed._nodes = []

class Processed.FlowNode
  constructor: (containerid, x=10, y=10) ->
    @id = uuid.v1()
    @inlets = []
    @outlets = []
    @myTitle = "FlowNode"
    @myDesc = ""
    @elem = $("<div>")
      .attr('id', @id)
      .addClass("FlowNode").addClass("_box")
      .html("<p>"+@myTitle+"</p>")
      .css("top", y+"px").css("left", x+"px")
      .dblclick( @edit )
    
    Processed._nodes.push(@)

    # This is a pain. We have to do this here otherwise 
    # it doesn't work. We would rather add it somewhere else, but
    # nevermind
    $(containerid).append(@elem)
    jsPlumb.draggable(@id)

  title: (title) ->
    if title?
      @myTitle = title
    @elem.html("<p>"+@myTitle+"</p>")
    @myTitle

  description: (desc) ->
    if desc?
      @myDesc = desc
    @myDesc

  getConnections: () ->
    jsPlumb.getConnections({source:@id})

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

  getIR: () ->
    throw "Not Implemented"

  edit: () ->
    throw "Not Implemented"

class Processed.InformNode extends Processed.FlowNode
  constructor: (container, x=50, y=50) ->
    super container, x, y
    @addSource "out"
    @addTarget "in"
    @title("Inform")
  
  getIR: () ->
    connection = @getConnections()[0]
    {
      id: @id,
      type: "inform",
      title: @myTitle,
      text: @myDesc,
      target: if connection? then connection.targetId else null
    }

class Processed.StartNode extends Processed.FlowNode
  @START: null
  
  @getStart: () ->
    @START

  constructor: (container, x=50, y=50) ->
    if Processed.StartNode.START?
      throw "There can only be one start node!"

    super container, x, y
    @addSource "out"
    @title("Start")
    # disable new start nodes somehow...
    Processed.StartNode.START = @

  getIR: () ->
    connection = @getConnections()[0]
    {
      id: @id,
      type: "inform",
      title: @myTitle,
      text: @myDesc,
      target: if connection? then connection.targetId else null
    }

class Processed.EndNode extends Processed.FlowNode
  constructor: (container, x=50, y=50) ->
    super container, x, y
    @addTarget "in"
    @title("End")
  
  getIR: () ->
    {
      id: @id,
      type: "end",
      title: @myTitle,
      text: @myDesc,
    }

Processed.getWorkflow = () ->
  workflow = Processed._nodes
    .map( (node)->node.getIR() )
    .reduce( (all,node) ->
      all[node.id]=node
      all
    , {} )
  workflow._config = { start: Processed.StartNode.getStart().id }
  workflow

Processed.nodeTypes = {
  "Start": Processed.StartNode,
  "End": Processed.EndNode,
  "Inform": Processed.InformNode
}
