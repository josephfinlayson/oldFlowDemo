Ext.data.JsonP.draw2d_command_CommandReconnect({"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.command.Command' rel='draw2d.command.Command' class='docClass'>draw2d.command.Command</a><div class='subclass '><strong>draw2d.command.CommandReconnect</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/CommandReconnect.html#draw2d-command-CommandReconnect' target='_blank'>CommandReconnect.js</a></div></pre><div class='doc-contents'><p>Reconnects two ports. This command is used during the DragDrop operation of a <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReconnect'>draw2d.command.CommandReconnect</span><br/><a href='source/CommandReconnect.html#draw2d-command-CommandReconnect-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.command.CommandReconnect-method-constructor' class='name expandable'>draw2d.command.CommandReconnect</a>( <span class='pre'>con</span> ) : <a href=\"#!/api/draw2d.command.CommandReconnect\" rel=\"draw2d.command.CommandReconnect\" class=\"docClass\">draw2d.command.CommandReconnect</a></div><div class='description'><div class='short'>Create a new Command objects which can be execute via the CommandStack. ...</div><div class='long'><p>Create a new Command objects which can be execute via the CommandStack.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>con</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the related Connection which is currently in the drag&amp;drop operation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.command.CommandReconnect\" rel=\"draw2d.command.CommandReconnect\" class=\"docClass\">draw2d.command.CommandReconnect</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.command.Command-method-constructor' rel='draw2d.command.Command-method-constructor' class='docClass'>draw2d.command.Command.constructor</a></p></div></div></div><div id='method-canExecute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReconnect'>draw2d.command.CommandReconnect</span><br/><a href='source/CommandReconnect.html#draw2d-command-CommandReconnect-method-canExecute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.CommandReconnect-method-canExecute' class='name expandable'>canExecute</a>( <span class='pre'></span> ) : boolean</div><div class='description'><div class='short'>Returns [true] if the command can be execute and the execution of the\ncommand modify the model. ...</div><div class='long'><p>Returns [true] if the command can be execute and the execution of the\ncommand modify the model. A CommandMove with [startX,startX] == [endX,endY] should\nreturn false. <br>\nthe execution of the Command doesn't modify the model.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.command.Command-method-canExecute' rel='draw2d.command.Command-method-canExecute' class='docClass'>draw2d.command.Command.canExecute</a></p></div></div></div><div id='method-cancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReconnect'>draw2d.command.CommandReconnect</span><br/><a href='source/CommandReconnect.html#draw2d-command-CommandReconnect-method-cancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.CommandReconnect-method-cancel' class='name expandable'>cancel</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Execute the command the first time ...</div><div class='long'><p>Execute the command the first time</p>\n<p>Overrides: <a href='#!/api/draw2d.command.Command-method-cancel' rel='draw2d.command.Command-method-cancel' class='docClass'>draw2d.command.Command.cancel</a></p></div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReconnect'>draw2d.command.CommandReconnect</span><br/><a href='source/CommandReconnect.html#draw2d-command-CommandReconnect-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.CommandReconnect-method-execute' class='name expandable'>execute</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Execute the command the first time ...</div><div class='long'><p>Execute the command the first time</p>\n<p>Overrides: <a href='#!/api/draw2d.command.Command-method-execute' rel='draw2d.command.Command-method-execute' class='docClass'>draw2d.command.Command.execute</a></p></div></div></div><div id='method-getLabel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.command.Command' rel='draw2d.command.Command' class='defined-in docClass'>draw2d.command.Command</a><br/><a href='source/Command.html#draw2d-command-Command-method-getLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.Command-method-getLabel' class='name expandable'>getLabel</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns a label of the Command. ...</div><div class='long'><p>Returns a label of the Command. e.g. \"move figure\".</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the label for this command</p>\n</div></li></ul></div></div></div><div id='method-redo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReconnect'>draw2d.command.CommandReconnect</span><br/><a href='source/CommandReconnect.html#draw2d-command-CommandReconnect-method-redo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.CommandReconnect-method-redo' class='name expandable'>redo</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Redo the command after the user has undo this command ...</div><div class='long'><p>Redo the command after the user has undo this command</p>\n<p>Overrides: <a href='#!/api/draw2d.command.Command-method-redo' rel='draw2d.command.Command-method-redo' class='docClass'>draw2d.command.Command.redo</a></p></div></div></div><div id='method-setNewPorts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReconnect'>draw2d.command.CommandReconnect</span><br/><a href='source/CommandReconnect.html#draw2d-command-CommandReconnect-method-setNewPorts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.CommandReconnect-method-setNewPorts' class='name expandable'>setNewPorts</a>( <span class='pre'>source, target</span> )</div><div class='description'><div class='short'>The new ports to use during the execute of this command. ...</div><div class='long'><p>The new ports to use during the execute of this command.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/draw2d.Port\" rel=\"draw2d.Port\" class=\"docClass\">draw2d.Port</a><div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/draw2d.Port\" rel=\"draw2d.Port\" class=\"docClass\">draw2d.Port</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-undo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.command.CommandReconnect'>draw2d.command.CommandReconnect</span><br/><a href='source/CommandReconnect.html#draw2d-command-CommandReconnect-method-undo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.command.CommandReconnect-method-undo' class='name expandable'>undo</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Undo the command ...</div><div class='long'><p>Undo the command</p>\n<p>Overrides: <a href='#!/api/draw2d.command.Command-method-undo' rel='draw2d.command.Command-method-undo' class='docClass'>draw2d.command.Command.undo</a></p></div></div></div></div></div></div></div>","mixedInto":[],"extends":"draw2d.command.Command","uses":[],"superclasses":["draw2d.command.Command"],"linenr":2,"meta":{"author":["Andreas Herz"]},"parentMixins":[],"requires":[],"subclasses":[],"files":[{"href":"CommandReconnect.html#draw2d-command-CommandReconnect","filename":"CommandReconnect.js"}],"members":{"cfg":[],"css_var":[],"method":[{"meta":{},"owner":"draw2d.command.CommandReconnect","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"draw2d.command.CommandReconnect","name":"canExecute","id":"method-canExecute","tagname":"method"},{"meta":{},"owner":"draw2d.command.CommandReconnect","name":"cancel","id":"method-cancel","tagname":"method"},{"meta":{},"owner":"draw2d.command.CommandReconnect","name":"execute","id":"method-execute","tagname":"method"},{"meta":{},"owner":"draw2d.command.Command","name":"getLabel","id":"method-getLabel","tagname":"method"},{"meta":{},"owner":"draw2d.command.CommandReconnect","name":"redo","id":"method-redo","tagname":"method"},{"meta":{},"owner":"draw2d.command.CommandReconnect","name":"setNewPorts","id":"method-setNewPorts","tagname":"method"},{"meta":{},"owner":"draw2d.command.CommandReconnect","name":"undo","id":"method-undo","tagname":"method"}],"event":[],"css_mixin":[],"property":[]},"inheritdoc":null,"inheritable":true,"html_meta":{"author":null},"singleton":false,"override":null,"private":null,"name":"draw2d.command.CommandReconnect","mixins":[],"enum":null,"statics":{"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[],"property":[]},"id":"class-draw2d.command.CommandReconnect","tagname":"class","component":false,"alternateClassNames":[],"aliases":{}});