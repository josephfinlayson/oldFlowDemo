$(window).load(function () {

  console.log(draw2d);
  var canvas = new draw2d.Canvas("container");

  canvas.addFigure( new draw2d.shape.node.Start(), 80,80);
  canvas.addFigure( new draw2d.shape.node.Start(), 50,50);

  canvas.addFigure( new draw2d.shape.node.End(), 150,150);
  canvas.addFigure( new draw2d.shape.node.End(), 350,250);



 MyInputPortLocator = draw2d.layout.locator.PortLocator.extend({
        init:function( ){
          this._super();
        },    
        relocate:function(index, figure){
            this.applyConsiderRotation(figure, figure.getParent().getWidth()/2, 0);
        }
    });


    MyOutputPortLocator = draw2d.layout.locator.PortLocator.extend({
        init:function( ){
          this._super();
        },    
        relocate:function(index, figure){
            var p = figure.getParent();

            this.applyConsiderRotation(figure, p.getWidth()/2, p.getHeight());
        }
    });


  // Add input and output ports to any shape via generic API calls
  // and custom locators
  //
  window.d = new draw2d.shape.basic.Rectangle();
//  canvas.addFigure( d,100,100);

  window.inputLocator = new MyInputPortLocator();
  window.outputLocator = new MyOutputPortLocator();

  d.createPort("input",inputLocator);
  d.createPort("output",outputLocator);
  
  canvas.addFigure( d,100,100);
  
  // add input and output ports via genric API calls and DEFAULT
  // locators. The default locator arange input on the left and ouput on the right
  // side of the shape
  //
  var d2 = new draw2d.shape.basic.Diamond();
  canvas.addFigure( d2,300,150);

  d2.createPort("input");
  d2.createPort("output");
  
  ///////////////////////////////////////////////////////////////////// 
  // JUST ADD SOME DOCU ELEMENTS ON THE SCREEN
  ///////////////////////////////////////////////////////////////////// 
  var msg = new draw2d.shape.note.PostIt("Add input and output ports at any position of the \nshape via generic API calls.");
  canvas.addFigure(msg, 20,20);
});
