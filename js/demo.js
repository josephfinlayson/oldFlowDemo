

function createNew(e){
  var newItem = $('<div>').addClass('item');

  /*
   * Create item
   */ 
  // Has a title.
  var title = $('<div>').addClass('title').text('Placeholder');
  newItem.append(title);
  // is created where we click
  newItem.css({'top': e.pageY,'left': e.pageX});
  // is a target
  jsPlumb.makeTarget(newItem, { anchor: 'Continuous' });
  // it's draggable within its container
  jsPlumb.draggable(newItem, { containment: 'parent' });
  // Destroy on doubleclick.
  newItem.dblclick(function(e) {
    jsPlumb.detachAllConnections($(this));
    $(this).remove();
    e.stopPropagation();
  });

  /*
   * Create endpoints
   */
  // make the yes endpoint
  var connectYes = $('<div>').addClass('connect').addClass('connectYes');
  jsPlumb.makeSource(connectYes, {
    parent: newItem,
    anchor: 'Continuous'
  });
  newItem.append(connectYes);

  // make the no endpoint 
  var connectNo = $('<div>').addClass('connect').addClass('connectNo');
  jsPlumb.makeSource(connectNo, {
    parent: newItem,
    anchor: 'Continuous'
  });
  newItem.append(connectNo);


  // Add the new item to our container. 
  // ideally this shouldn't be hard-coded, but recovered from somewhere.
  $('#container').append(newItem);
}

jsPlumb.ready(function() {
  $("#container").dblclick(createNew);
});
