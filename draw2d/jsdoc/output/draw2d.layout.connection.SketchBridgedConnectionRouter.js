Ext.data.JsonP.draw2d_layout_connection_SketchBridgedConnectionRouter({"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='docClass'>draw2d.layout.connection.ConnectionRouter</a><div class='subclass '><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='docClass'>draw2d.layout.connection.MazeConnectionRouter</a><div class='subclass '><strong>draw2d.layout.connection.SketchBridgedConnectionRouter</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/SketchConnectionRouter.html#draw2d-layout-connection-SketchBridgedConnectionRouter' target='_blank'>SketchConnectionRouter.js</a></div></pre><div class='doc-contents'><p>Provide a router which routes the connection in a hand drawn manner.</p>\n              <p class=\"pre\">Since:<strong> 2.7.2</strong></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.SketchBridgedConnectionRouter'>draw2d.layout.connection.SketchBridgedConnectionRouter</span><br/><a href='source/SketchConnectionRouter.html#draw2d-layout-connection-SketchBridgedConnectionRouter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.connection.SketchBridgedConnectionRouter-method-constructor' class='name expandable'>draw2d.layout.connection.SketchBridgedConnectionRouter</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.layout.connection.SketchBridgedConnectionRouter\" rel=\"draw2d.layout.connection.SketchBridgedConnectionRouter\" class=\"docClass\">draw2d.layout.connection.SketchBridgedConnectionRouter</a></div><div class='description'><div class='short'>Creates a new Router object. ...</div><div class='long'><p>Creates a new Router object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.connection.SketchBridgedConnectionRouter\" rel=\"draw2d.layout.connection.SketchBridgedConnectionRouter\" class=\"docClass\">draw2d.layout.connection.SketchBridgedConnectionRouter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-constructor' rel='draw2d.layout.connection.MazeConnectionRouter-method-constructor' class='docClass'>draw2d.layout.connection.MazeConnectionRouter.constructor</a></p></div></div></div><div id='method-_route' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.MazeConnectionRouter</a><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-_route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-_route' class='name expandable'>_route</a>( <span class='pre'>conn, fromPt, fromDir, toPt, toDir</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Internal routing algorithm. ...</div><div class='long'><p>Internal routing algorithm.</p>\n\n<pre><code> * &lt;p&gt;\n</code></pre>\n\n<p>Possible values:</p>\n\n<ul>\n  <li>up -&gt; 0</li>\n  <li>right -&gt; 1</li>\n  <li>down -&gt; 2</li>\n  <li>left -&gt; 3</li>\n</ul>\n\n\n<p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromDir</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>toPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>toDir</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-generateNoGoGrid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.MazeConnectionRouter</a><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-generateNoGoGrid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-generateNoGoGrid' class='name expandable'>generateNoGoGrid</a>( <span class='pre'>conn</span> ) : PF.Grid</div><div class='description'><div class='short'>Generate a grid base no go map required for the path finding algorithm ...</div><div class='long'><p>Generate a grid base no go map required for the path finding algorithm</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>PF.Grid</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAddjustedPoint' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.MazeConnectionRouter</a><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-getAddjustedPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-getAddjustedPoint' class='name expandable'>getAddjustedPoint</a>( <span class='pre'>pt, direction, adjustment</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></div><div class='description'><div class='short'>move the point in the given direction with the given offset ...</div><div class='long'><p>move the point in the given direction with the given offset</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>direction</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>adjustment</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>connection</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Callback method if the router has been assigned to a connection. ...</div><div class='long'><p>Callback method if the router has been assigned to a connection.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n              <p class=\"pre\">Since:<strong> 2.7.2</strong></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The assigned connection</p>\n</div></li></ul></div></div></div><div id='method-onUninstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>connection</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Callback method if the router has been removed from the connection. ...</div><div class='long'><p>Callback method if the router has been removed from the connection.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n              <p class=\"pre\">Since:<strong> 2.7.2</strong></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The related connection</p>\n</div></li></ul></div></div></div><div id='method-route' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.MazeConnectionRouter</a><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-route' class='name expandable'>route</a>( <span class='pre'>conn</span> )</div><div class='description'><div class='short'>Layout the hands over connection in a manhattan like layout ...</div><div class='long'><p>Layout the hands over connection in a manhattan like layout</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-route' rel='draw2d.layout.connection.ConnectionRouter-method-route' class='docClass'>draw2d.layout.connection.ConnectionRouter.route</a></p></div></div></div></div></div></div></div>","mixedInto":[],"extends":"draw2d.layout.connection.MazeConnectionRouter","uses":[],"superclasses":["draw2d.layout.connection.ConnectionRouter","draw2d.layout.connection.MazeConnectionRouter"],"linenr":2,"meta":{"since":{"text":"","version":"2.7.2"},"author":["Andreas Herz"]},"parentMixins":[],"requires":[],"subclasses":[],"files":[{"href":"SketchConnectionRouter.html#draw2d-layout-connection-SketchBridgedConnectionRouter","filename":"SketchConnectionRouter.js"}],"members":{"cfg":[],"css_var":[],"method":[{"meta":{},"owner":"draw2d.layout.connection.SketchBridgedConnectionRouter","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{"private":true},"owner":"draw2d.layout.connection.MazeConnectionRouter","name":"_route","id":"method-_route","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.MazeConnectionRouter","name":"generateNoGoGrid","id":"method-generateNoGoGrid","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.MazeConnectionRouter","name":"getAddjustedPoint","id":"method-getAddjustedPoint","tagname":"method"},{"meta":{"template":true,"since":{"text":"","version":"2.7.2"}},"owner":"draw2d.layout.connection.ConnectionRouter","name":"onInstall","id":"method-onInstall","tagname":"method"},{"meta":{"template":true,"since":{"text":"","version":"2.7.2"}},"owner":"draw2d.layout.connection.ConnectionRouter","name":"onUninstall","id":"method-onUninstall","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.MazeConnectionRouter","name":"route","id":"method-route","tagname":"method"}],"event":[],"css_mixin":[],"property":[]},"inheritdoc":null,"inheritable":true,"html_meta":{"author":null,"since":"              <p class=\"pre\">Since:<strong> 2.7.2</strong></p>\n"},"singleton":false,"override":null,"private":null,"name":"draw2d.layout.connection.SketchBridgedConnectionRouter","mixins":[],"enum":null,"statics":{"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[],"property":[]},"id":"class-draw2d.layout.connection.SketchBridgedConnectionRouter","tagname":"class","component":false,"alternateClassNames":[],"aliases":{}});