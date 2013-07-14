LabelRectangle= draw2d.shape.basic.Rectangle.extend({
    
    init:function(width, height)
    {
      this._super(width, height);
      this.setCssClass('item');
      
      // Create any Draw2D figure as decoration for the connection
      //
      this.label = new draw2d.shape.basic.Label("<question>");
      this.label.setFontSize(18);
      this.label.setFontColor("#ffffff");
      this.label.setColor("#123456");
      
      // add the new decoration to the connection with a position locator.
      //
      this.addFigure(this.label, new draw2d.layout.locator.CenterLocator(this));
      
      this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
    }
});

NoPortLocator = draw2d.layout.locator.PortLocator.extend({
  init:function( ){
      this._super();
    },    
  relocate:function(index, port){
    var p= port.getParent();
    port.setPosition( 20, p.getHeight());
  }
});


YesPortLocator = draw2d.layout.locator.PortLocator.extend({
  init:function( ){
    this._super();
  },    
  relocate:function(index, port){
    var p = port.getParent();
    port.setPosition(p.getWidth()-20, p.getHeight());
  }
});

InPortLocator = draw2d.layout.locator.PortLocator.extend({
  init:function( ){
    this._super();
  },    
  relocate:function(index, port){
    var p = port.getParent();
    port.setPosition(p.getWidth()/2, 0);
  }
});

function makeYN(canvas,x,y){ // This should be an extension, but I'm too tired to care
  var d = new LabelRectangle(100,100);
  d.createPort("output",new YesPortLocator());
  d.createPort("output",new NoPortLocator());
  d.createPort("input",new InPortLocator());
  d.getPorts().each(function(i,p){
    p.setCssClass('port')
  });
  $(d).dblclick(function(e){
    //todo: delete d
    e.stopPropagation();
  });
  canvas.addFigure( d,x,y);
}

$(window).load(function () {

  console.log(draw2d);
  var canvas = new draw2d.Canvas("container");

  $("#container").dblclick(function(e){
    makeYN(canvas, e.clientX, e.clientY);
    e.stopPropagation();
  });

  makeYN(canvas, 300, 300);

  var msg = new draw2d.shape.note.PostIt("Add input and output ports at any position of the \nshape via generic API calls.");
  canvas.addFigure(msg, 20,20);
});
