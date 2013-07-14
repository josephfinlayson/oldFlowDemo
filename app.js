$(window).load(function () {

  console.log(draw2d);
  var canvas = new draw2d.Canvas("container");

  //canvas.addFigure( new draw2d.shape.basic.Oval(),100,100);
  canvas.addFigure( new draw2d.shape.basic.Rectangle(),120,150);
  
  canvas.addFigure( new draw2d.shape.node.Start(), 80,80);
  canvas.addFigure( new draw2d.shape.node.Start(), 50,50);

  canvas.addFigure( new draw2d.shape.node.End(), 150,150);
  canvas.addFigure( new draw2d.shape.node.End(), 350,250);

});
