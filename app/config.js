var connectorPaintStyle = {
  lineWidth:4,
  strokeStyle:"#deea18",
  joinstyle:"round",
  outlineColor:"#eaedef",
  outlineWidth:2
};

var connectorHoverStyle = {
  lineWidth:4,
  strokeStyle:"#5C96BC",
  outlineWidth:2,
  outlineColor:"white"
};

var endpointHoverStyle = {fillStyle:"orange"};

var	sourceEndpoint = {
  endpoint:"Dot",
  paintStyle:{ 
    strokeStyle:"#1e8151",
    fillStyle:"white",
    radius:7,
    lineWidth:2 
  },				
  isSource:true,
  connector:[ "Flowchart", { stub:[40, 60], gap:10, cornerRadius:5, alwaysRespectStubs:true } ],								                
  connectorStyle:connectorPaintStyle,
  hoverPaintStyle:endpointHoverStyle,
  connectorHoverStyle:connectorHoverStyle,
  dragOptions:{},
  /*overlays:[
    [ "Label", { 
      location:[0.5, 1.5], 
      label:"Drag",
      cssClass:"endpointSourceLabel" 
    } ]
  ] */
};

var targetEndpoint = {
  endpoint:"Dot",					
  paintStyle:{ fillStyle:"#1e8151",radius:7 },
  hoverPaintStyle:endpointHoverStyle,
  maxConnections:-1,
  dropOptions:{ hoverClass:"hover", activeClass:"active" },
  isTarget:true,			
  /* overlays:[
    [ "Label", { location:[0.5, -0.5], label:"Drop", cssClass:"endpointTargetLabel" } ]
    ] */
};
