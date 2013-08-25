function getUserText(current, x,y){
  return prompt("New text", current);
}


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
      this.label.onContextMenu =  function(x,y){
        this.setText(getUserText(this.getText(),x,y));
      },
      
      // add the new decoration to the connection with a position locator.
      //
      this.addFigure(this.label, new draw2d.layout.locator.CenterLocator(this));
      
      this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
    },
    setText: function(text){
      this.label.setText(text);
    },
    
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

OutPortLocator = draw2d.layout.locator.PortLocator.extend({
  init:function( ){
    this._super();
  },    
  relocate:function(index, port){
    var p = port.getParent();
    port.setPosition(p.getWidth()/2, p.getHeight());
  }
});

var blocks = {

  "decision-manual": function (canvas,x,y){ // This should be an extension, but I'm too tired to care
    var d = new LabelRectangle(200,75);
    d.createPort("output",new YesPortLocator()).addCssClass("yport");
    d.createPort("output",new NoPortLocator()).addCssClass("nport");
    d.createPort("input",new InPortLocator());
    d.getPorts().each(function(i,p){
      p.addCssClass('port')
    });
    d.setText("<decision-manual>");
    canvas.addFigure( d,x,y);
  },
  "decision-auto":null,
  info:function (canvas,x,y){
    var d = new LabelRectangle(100,50);
    d.createPort("input", new InPortLocator());
    d.createPort("output", new OutPortLocator());
    d.getPorts().each(function(i,p){
      p.setCssClass('port')
    });
    d.setText("<info>");
    canvas.addFigure( d,x,y);
  },
  input:function (canvas,x,y){
    var d = new LabelRectangle(100,50);
    d.createPort("input", new InPortLocator());
    d.createPort("output", new OutPortLocator());
    d.getPorts().each(function(i,p){
      p.setCssClass('port')
    });
    d.setText("<input>");
    canvas.addFigure( d,x,y);
  },
  end:function (canvas,x,y){
    var d = new LabelRectangle(100,50);
    d.createPort("input", new InPortLocator());
    d.getPorts().each(function(i,p){
      p.setCssClass('port')
    });
    d.setText("<end>");
    canvas.addFigure( d,x,y);
  },
  

  start: function (canvas,x,y){
    var d = new LabelRectangle(100,50);
    d.createPort("output", new OutPortLocator());
    d.getPorts().each(function(i,p){
      p.setCssClass('port')
    });
    d.setText("<start>");
    canvas.addFigure( d,x,y);
  }
}

$(window).load(function () {

  console.log(draw2d);
  var canvas = new draw2d.Canvas("container");

  $("#container").dblclick(function(e){
    blocks[window.selectedBlock](canvas, e.clientX, e.clientY);
    e.stopPropagation();
  });

  blocks["start"](canvas, 50, 50);

  });
