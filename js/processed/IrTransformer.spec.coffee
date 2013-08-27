

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

  describe "For all types of nodes", ->
    it "Will render the node title in the '.stage-title' element", ->
      node = {type: "info", title: "TEST TITLE"}
      expect( $(Processed.NodeToHtml(node, null, null)).find(".stage-title").text() ).toEqual("TEST TITLE")

    it "And render the node text in the '.stage-text' element", ->
      node = {type: "foo", text: "TEST TEXT"}
      expect( $(Processed.NodeToHtml(node, null, null)).find(".stage-text").text() ).toEqual("TEST TEXT")

