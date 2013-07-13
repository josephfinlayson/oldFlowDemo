

function createNew(e){
  var newItem = $('<div>').addClass('item');
  var title = $('<div>').addClass('title').text('Placeholder');
  var connectNo = $('<div>').addClass('connect').addClass('connectNo');
  var connectYes = $('<div>').addClass('connect').addClass('connectYes');

  // The item is created where we click
  newItem.css({'top': e.pageY,'left': e.pageX});

  //The entire item is a target
  jsPlumb.makeTarget(newItem, { anchor: 'Continuous' });

  jsPlumb.draggable(newItem, {
    containment: 'parent'
  });
  jsPlumb.makeSource(connectYes, {
    parent: newItem,
    anchor: 'Continuous'
  });
  jsPlumb.makeSource(connectNo, {
    parent: newItem,
    anchor: 'Continuous'
  });

  newItem.append(title);
  newItem.append(connectYes);
  newItem.append(connectNo);


  newItem.dblclick(function(e) {
    jsPlumb.detachAllConnections($(this));
    $(this).remove();
    e.stopPropagation();
  });

  $('#container').append(newItem);

}

jsPlumb.ready(function() {
  
  $("#container").dblclick(createNew);
  
  
});
