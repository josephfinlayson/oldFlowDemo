
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
    # callback: ( -> console.log(Processed.handleWorkflow({
    #    "c1553f70-1f49-11e3-b9da-8bee75f7704a":{
    #       "id":"c1553f70-1f49-11e3-b9da-8bee75f7704a",
    #       "type":"inform",
    #       "title":"Start",
    #       "text":"",
    #       "target":"c158e8f0-1f49-11e3-b9da-8bee75f7704a"
    #    },
    #    "c158e8f0-1f49-11e3-b9da-8bee75f7704a":{
    #       "id":"c158e8f0-1f49-11e3-b9da-8bee75f7704a",
    #       "type":"inform",
    #       "title":"dsfsdf",
    #       "text":"",
    #       "target":"c15b0bd0-1f49-11e3-b9da-8bee75f7704a"
    #    },
    #    "c15b0bd0-1f49-11e3-b9da-8bee75f7704a":{
    #       "id":"c15b0bd0-1f49-11e3-b9da-8bee75f7704a",
    #       "type":"end",
    #       "title":"End",
    #       "text":""
    #    },
    #    "_config":{
    #       "start":"c1553f70-1f49-11e3-b9da-8bee75f7704a"
    #       "type":"inform"
    #    }
    #   }
    # )) ),
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


