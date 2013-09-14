
module 'Processed'



class Processed.FlowNode
  constructor: (containerid, x=10, y=10) ->
    @id = uuid.v1()
    @inlets = []
    @outlets = []
    @elem = $("<div>")
      .attr('id', @id)
      .addClass("FlowNode").addClass("_box")
      .html("<p>FlowNode</p>")
      .css("top", y+"px").css("left", x+"px")
    
    $(containerid).append(@elem)
    
    jsPlumb.draggable(@id)
    @elem.resizable()

    
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

class Processed.InformNode extends Processed.FlowNode
  constructor: (container, x=50, y=50) ->
    super container, x, y
    @addSource "out"
    @addTarget "in"
    @elem.html("<p>InformNode</p>")
