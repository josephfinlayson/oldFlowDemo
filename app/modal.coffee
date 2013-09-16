
#
# Creates a modal dialog 
#
# contents.title -> text
# contents.description -> text
# contents.body -> element
# acceptcallback should return true if successful and the modal should exit, 
# or false otherwise.
Processed.makeModal = (contents, acceptCallback) ->
  deleteModal = () -> $("#modal").remove()
  acceptCallbackWrapper = () ->
    if acceptCallback()
      deleteModal()
  title = $("<h2>").text(contents.title)
  desc = $("<div>").addClass("modal-description").text(contents.description)
  body = $("<div>").addClass("modal-body").append(contents.body)
  accept = $("<a>").addClass("modal-choice").addClass("modal-accept").text("accept").click(acceptCallbackWrapper)
  cancel = $("<a>").addClass("modal-choice").addClass("modal-cancel").text("cancel").click(deleteModal)
  modalBody = $("<div>")
    .addClass("modalbody")
    .append(title)
    .append(desc)
    .append(body)
    .append($("<div>")
      .attr("id", "modal-choices")
      .append(cancel)
      .append(accept)
      .append($("<div>").addClass("clear")))
  modal = $("<div>").attr("id","modal").append(modalBody)
  $("body").append(modal)


Processed.makeNodeEditDialog = (node) -> null
  
