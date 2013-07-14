/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.io.json.Reader
 * Read a JSON data and import them into the canvas. The JSON must be generated with the
 * {@link draw2d.io.json.Writer}.
 * 
 *      // Load a standard draw2d JSON object into the canvas
 *      //
 *      var jsonDocument = 
 *          [
  *           {
 *              "type": "draw2d.shape.basic.Oval",
 *              "id": "5b4c74b0-96d1-1aa3-7eca-bbeaed5fffd7",
 *              "x": 237,
 *              "y": 236,
 *              "width": 93,
 *              "height": 38
 *            },
 *            {
 *              "type": "draw2d.shape.basic.Rectangle",
 *              "id": "354fa3b9-a834-0221-2009-abc2d6bd852a",
 *              "x": 225,
 *              "y": 97,
 *              "width": 201,
 *              "height": 82,
 *              "radius": 2
 *            }
 *          ];
 *      // unmarshal the JSON document into the canvas
 *      // (load)
 *      var reader = new draw2d.io.json.Reader();
 *      reader.unmarshal(canvas, jsonDocument);
 *      
 * 
 * @extends draw2d.io.Reader
 */
draw2d.io.json.Reader = draw2d.io.Reader.extend({
    
    init: function(){
        this._super();
    },
    
    /**
     * @method
     * 
     * Restore the canvas from a given JSON object.
     * 
     * @param {draw2d.Canvas} canvas the canvas to restore
     * @param {Object} document the json object to load.
     */
    unmarshal: function(canvas, json){
        var node=null;
        $.each(json, function(i, element){
            var o = eval("new "+element.type+"()");
            var source= null;
            var target=null;
            for(i in element){
                var val = element[i];
                if(i === "source"){
                    node = canvas.getFigure(val.node);
                    source = node.getPort(val.port);
                }
                else if (i === "target"){
                    node = canvas.getFigure(val.node);
                    target = node.getPort(val.port);
                }
            }
            if(source!==null && target!==null){
                o.setSource(source);
                o.setTarget(target);
            }
            o.setPersistentAttributes(element);
            canvas.addFigure(o);
        });
        
        // recalculate all crossings and repaint the connections with 
        // possible crossing decoration
        canvas.calculateConnectionIntersection();
        canvas.getLines().each(function(i,line){
            line.svgPathString=null;
            line.repaint();
        });
        canvas.linesToRepaintAfterDragDrop = canvas.getLines().clone();
        

    }
});