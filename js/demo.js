
jsPlumb.ready(function() {
  

  $("#container").dblclick(function(e){
    var newState = $('<div>').addClass('item').text('Item n');
    var title = $('<div>').addClass('title').text('State ');
    var connect = $('<div>').addClass('connect');
    
    newState.css({
      'top': e.pageY,
      'left': e.pageX
    });
    
    jsPlumb.makeTarget(newState, {
      anchor: 'Continuous'
    });
    
    jsPlumb.makeSource(connect, {
      parent: newState,
      anchor: 'Continuous'
    });
    
    newState.append(title);
    newState.append(connect);
    
    jsPlumb.draggable(newState, {
      containment: 'parent'
    });
 
    newState.dblclick(function(e) {
      jsPlumb.detachAllConnections($(this));
      $(this).remove();
      e.stopPropagation();
    });
    
    $('#container').append(newState);
    
  });
});
