
commandDest = "#commands"

commands = [
  {
    name: "save",
    callback: ( -> alert("save")),
    color: "white",
    background:"green"
  },
  {
    name: "execute",
    callback: ( -> console.log(Processed.handleWorkflow( Processed.getWorkflow() ))),
    color: "white",
    background:"red"
  },
]

$.each(commands, (index, command) ->
  link = $("<a>")
    .text(command.name)
    .css("color", command.color)
    .css("background-color", command.background)
    .click(command.callback)
  $(commandDest).append(link)
)


