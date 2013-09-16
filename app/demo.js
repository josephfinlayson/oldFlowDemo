
	
function initapp() {
			jsPlumb.importDefaults({
				// default drag options
				DragOptions : { cursor: 'pointer', zIndex:2000 },
				// default to blue at one end and green at the other
				EndpointStyles : [{ fillStyle:'#225588' }, { fillStyle:'#558822' }],
				// blue endpoints 7 px; green endpoints 11.
				Endpoints : [ [ "Dot", {radius:7} ], [ "Dot", { radius:11 } ]],
				// the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
				// case it returns the 'labelText' member that we set on each connection in the 'init' method below.
				ConnectionOverlays : [
					[ "Arrow", { location:1 } ],
					[ "Label", { 
						location:0.1,
						id:"label",
						cssClass:"aLabel"
					}]
				]
			});		
      
			// this is the paint style for the connecting lines..
						
			var newConnection = function(connection) {
				/* connection.getOverlay("label").setLabel(connection.sourceId + " to " + connection.targetId); */
				connection.bind("editCompleted", function(o) {
					if (typeof console != "undefined")
						console.log("connection edited. path is now ", o.path);
				});
			};			

								
			// listen for new connections; initialise them the same way we initialise the connections at startup.
			jsPlumb.bind("connection", function(connInfo, originalEvent) { 
				newConnection(connInfo.connection);
			});			
						
			jsPlumb.draggable($(".window"), { grid: [20, 20] });		
            
		            
			//
			// listen for clicks on connections, and offer to delete connections on click.
			//
			jsPlumb.bind("click", function(conn, originalEvent) {
				//if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
				if (confirm("Delete this connection?"))
					jsPlumb.detach(conn); 
			});	
			
			jsPlumb.bind("connectionDrag", function(connection) {
				console.log("connection " + connection.id + " is being dragged. suspendedElement is ", connection.suspendedElement, " of type ", connection.suspendedElementType);
			});		
			
			jsPlumb.bind("connectionDragStop", function(connection) {
				console.log("connection " + connection.id + " was dragged");
			});
	};

jsPlumb.bind("ready", function() {
	jsPlumb.setRenderMode(jsPlumb.SVG);
  jsPlumb.Defaults.Container = $("#flowcontainer");				
	initapp();
});
