###
 Helper functions (event mocking, etc...)
###

eventFire = (el, etype) ->
  if el.fireEvent?
    el.fireEvent('on' + etype)
  else
   evObj = document.createEvent('Events')
   evObj.initEvent(etype, true, false)
   el.dispatchEvent(evObj)

clickOn = (el) ->
  eventFire(el, "click")

###
 Tests
###

describe "Sanity tests", ->
  it "true is true", ->
    expect(true).toBe(true)


describe "High level processed tests", ->
  it "Processed module is defined", ->
    expect(Processed).toBeDefined()

describe "IR transformer", ->
  it "Exists", ->
    expect(Processed.NodeToHtml).toBeDefined()
  
  it "Transforms input to an HTMLElement", ->
    expect(Processed.NodeToHtml(null, null, null)).toEqual(jasmine.any(HTMLElement))

  describe "For any type of nodes", ->
    it "Will render the node title in the '.stage-title' element", ->
      node = {type: "foo", title: "TEST TITLE"}
      expect( $(Processed.NodeToHtml(node, null, null)).find(".stage-title").text() ).toEqual("TEST TITLE")

    it "Will render the node text in the '.stage-text' element", ->
      node = {type: "foo", text: "TEST TEXT"}
      expect( $(Processed.NodeToHtml(node, null, null)).find(".stage-text").text() ).toEqual("TEST TEXT")

  describe "For inform nodes", ->
    node = null
    callbacks = null

    beforeEach ->
      callbacks = {
        simple: (target) ->
          null
      }
      spyOn(callbacks, "simple")

      node = {type: "inform", title: "TEST TITLE", text: "TEST TEXT", target: "TEST_TARGET"}
    
    it "Clicking in the '.target' element will call the callback with the target name", ->
      elem = Processed.NodeToHtml(node, null, null, callbacks.simple)
      clickOn($(elem).find(".target")[0])
      expect(callbacks.simple).toHaveBeenCalledWith("TEST_TARGET")
   