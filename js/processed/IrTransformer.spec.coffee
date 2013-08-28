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

# Useful to avoid error messages about undefined callbacks.
doNothing = () -> null

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
    expect(Processed.NodeToHtml(null, null, null, doNothing)).toEqual(jasmine.any(HTMLElement))

  describe "For any type of nodes", ->
    node = {type: "foo", title: "TEST TITLE", text: "TEST TEXT"}
    elem = Processed.NodeToHtml(node, null, null, doNothing)
    
    it "Will render the node title in the '.stage-title' element", ->
      expect( $(elem).find(".stage-title").text() ).toEqual("TEST TITLE")

    it "Will render the node text in the '.stage-text' element", ->
      expect( $(elem).find(".stage-text").text() ).toEqual("TEST TEXT")

  describe "For inform nodes", ->
    node = {type: "inform", title: "TEST TITLE", text: "TEST TEXT", target: "TEST_TARGET"}
    callbacks = null

    beforeEach ->
      callbacks = {
        simple: (target) ->
          null
      }
      spyOn(callbacks, "simple")

    
    it "Clicking in the '.target' element will call the callback with the target name", ->
      elem = Processed.NodeToHtml(node, null, null, callbacks.simple)
      clickOn($(elem).find(".target")[0])
      expect(callbacks.simple).toHaveBeenCalledWith("TEST_TARGET")

  describe "For choice nodes", ->
    node = {
      type: "choice",
      title: "TEST_TITLE",
      text: "TEST_TEXT",
      choices: [
        {text: "A", target:"TARGET_A", 'class': "CLASS_A"},
        {text: "B", target:"TARGET_B", 'class': "CLASS_B"},
        {text: "C", target:"TARGET_C", 'class': "CLASS_C"}
      ]
    }
    
    it "Will create three links when provided with three choices", ->
      elem = Processed.NodeToHtml(node, null, null, doNothing)
      expect($(elem).find(".target").length).toBe(3)

    it "Will not mix up targets for multiple nodes", ->
      callbacks = {
        simple: (target) ->
          null
      }
      spyOn(callbacks, "simple")
      elem = Processed.NodeToHtml(node, null, null, callbacks.simple)
      a_target = $(elem).find(".target")[1]
      target_text = $(a_target).text()
      clickOn(a_target)
      expect(callbacks.simple).toHaveBeenCalledWith("TARGET_"+target_text)
      
    it "Will apply a class to targets if it is provided", ->
      elem = Processed.NodeToHtml(node, null, null, doNothing)
      a_target = $(elem).find(".target")[1]
      target_text = $(a_target).text()
      expect($(a_target).hasClass("CLASS_"+target_text)).toBeTruthy()

      
  
