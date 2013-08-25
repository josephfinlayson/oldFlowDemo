Ext.data.JsonP.draw2d_layout_connection_FanConnectionRouter({"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='docClass'>draw2d.layout.connection.ConnectionRouter</a><div class='subclass '><a href='#!/api/draw2d.layout.connection.DirectRouter' rel='draw2d.layout.connection.DirectRouter' class='docClass'>draw2d.layout.connection.DirectRouter</a><div class='subclass '><strong>draw2d.layout.connection.FanConnectionRouter</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/FanConnectionRouter.html#draw2d-layout-connection-FanConnectionRouter' target='_blank'>FanConnectionRouter.js</a></div></pre><div class='doc-contents'><p>Automatic router that spreads its  <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">Connections</a> in a fan-like fashion upon collision.</p>\n\n<p>See the example:</p>\n\n<pre class='inline-example preview small frame'><code>// Override the default connection type. This is used during drag&amp;drop operations of ports.\n//\n<a href=\"#!/api/draw2d.Connection-method-createConnection\" rel=\"draw2d.Connection-method-createConnection\" class=\"docClass\">draw2d.Connection.createConnection</a>=function(sourcePort, targetPort){\n   // return my special kind of connection\n   var con = new <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a>();\n   con.setRouter(new <a href=\"#!/api/draw2d.layout.connection.FanConnectionRouter\" rel=\"draw2d.layout.connection.FanConnectionRouter\" class=\"docClass\">draw2d.layout.connection.FanConnectionRouter</a>());\n   return con;\n};\n\n// create and add two nodes which contains Ports (In and OUT)\n//\nvar start = new <a href=\"#!/api/draw2d.shape.node.Start\" rel=\"draw2d.shape.node.Start\" class=\"docClass\">draw2d.shape.node.Start</a>();\nvar end   = new <a href=\"#!/api/draw2d.shape.node.End\" rel=\"draw2d.shape.node.End\" class=\"docClass\">draw2d.shape.node.End</a>();\n\n// ...add it to the canvas \ncanvas.addFigure( start, 50,50);\ncanvas.addFigure( end, 230,80);\n\n// first Connection\n//\nvar c = <a href=\"#!/api/draw2d.Connection-method-createConnection\" rel=\"draw2d.Connection-method-createConnection\" class=\"docClass\">draw2d.Connection.createConnection</a>();\nc.setSource(start.getOutputPort(0));\nc.setTarget(end.getInputPort(0));\ncanvas.addFigure(c);\n\n// second Connection\n//\nc = <a href=\"#!/api/draw2d.Connection-method-createConnection\" rel=\"draw2d.Connection-method-createConnection\" class=\"docClass\">draw2d.Connection.createConnection</a>();\nc.setSource(start.getOutputPort(0));\nc.setTarget(end.getInputPort(0));\ncanvas.addFigure(c);\n\n// third Connection\n//\nc = <a href=\"#!/api/draw2d.Connection-method-createConnection\" rel=\"draw2d.Connection-method-createConnection\" class=\"docClass\">draw2d.Connection.createConnection</a>();\nc.setSource(start.getOutputPort(0));\nc.setTarget(end.getInputPort(0));\ncanvas.addFigure(c);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.FanConnectionRouter'>draw2d.layout.connection.FanConnectionRouter</span><br/><a href='source/FanConnectionRouter.html#draw2d-layout-connection-FanConnectionRouter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.connection.FanConnectionRouter-method-constructor' class='name expandable'>draw2d.layout.connection.FanConnectionRouter</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.layout.connection.FanConnectionRouter\" rel=\"draw2d.layout.connection.FanConnectionRouter\" class=\"docClass\">draw2d.layout.connection.FanConnectionRouter</a></div><div class='description'><div class='short'>Creates a new Router object. ...</div><div class='long'><p>Creates a new Router object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.connection.FanConnectionRouter\" rel=\"draw2d.layout.connection.FanConnectionRouter\" class=\"docClass\">draw2d.layout.connection.FanConnectionRouter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.connection.DirectRouter-method-constructor' rel='draw2d.layout.connection.DirectRouter-method-constructor' class='docClass'>draw2d.layout.connection.DirectRouter.constructor</a></p></div></div></div><div id='method-invalidate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.DirectRouter' rel='draw2d.layout.connection.DirectRouter' class='defined-in docClass'>draw2d.layout.connection.DirectRouter</a><br/><a href='source/DirectRouter.html#draw2d-layout-connection-DirectRouter-method-invalidate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.DirectRouter-method-invalidate' class='name expandable'>invalidate</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Invalidates the given Connection ...</div><div class='long'><p>Invalidates the given Connection</p>\n</div></div></div><div id='method-onInstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>connection</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Callback method if the router has been assigned to a connection. ...</div><div class='long'><p>Callback method if the router has been assigned to a connection.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n              <p class=\"pre\">Since:<strong> 2.7.2</strong></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The assigned connection</p>\n</div></li></ul></div></div></div><div id='method-onUninstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>connection</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Callback method if the router has been removed from the connection. ...</div><div class='long'><p>Callback method if the router has been removed from the connection.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n              <p class=\"pre\">Since:<strong> 2.7.2</strong></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The related connection</p>\n</div></li></ul></div></div></div><div id='method-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.FanConnectionRouter'>draw2d.layout.connection.FanConnectionRouter</span><br/><a href='source/FanConnectionRouter.html#draw2d-layout-connection-FanConnectionRouter-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.FanConnectionRouter-method-route' class='name expandable'>route</a>( <span class='pre'>conn</span> )</div><div class='description'><div class='short'>Layout the hands over connection in a manhattan like layout ...</div><div class='long'><p>Layout the hands over connection in a manhattan like layout</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.connection.DirectRouter-method-route' rel='draw2d.layout.connection.DirectRouter-method-route' class='docClass'>draw2d.layout.connection.DirectRouter.route</a></p></div></div></div></div></div></div></div>","mixedInto":[],"extends":"draw2d.layout.connection.DirectRouter","uses":[],"superclasses":["draw2d.layout.connection.ConnectionRouter","draw2d.layout.connection.DirectRouter"],"linenr":1,"meta":{"author":["Andreas Herz"]},"parentMixins":[],"requires":[],"subclasses":[],"files":[{"href":"FanConnectionRouter.html#draw2d-layout-connection-FanConnectionRouter","filename":"FanConnectionRouter.js"}],"members":{"cfg":[],"css_var":[],"method":[{"meta":{},"owner":"draw2d.layout.connection.FanConnectionRouter","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.DirectRouter","name":"invalidate","id":"method-invalidate","tagname":"method"},{"meta":{"template":true,"since":{"text":"","version":"2.7.2"}},"owner":"draw2d.layout.connection.ConnectionRouter","name":"onInstall","id":"method-onInstall","tagname":"method"},{"meta":{"template":true,"since":{"text":"","version":"2.7.2"}},"owner":"draw2d.layout.connection.ConnectionRouter","name":"onUninstall","id":"method-onUninstall","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.FanConnectionRouter","name":"route","id":"method-route","tagname":"method"}],"event":[],"css_mixin":[],"property":[]},"inheritdoc":null,"inheritable":true,"html_meta":{"author":null},"singleton":false,"override":null,"private":null,"name":"draw2d.layout.connection.FanConnectionRouter","mixins":[],"enum":null,"statics":{"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[],"property":[]},"id":"class-draw2d.layout.connection.FanConnectionRouter","tagname":"class","component":false,"alternateClassNames":[],"aliases":{}});