/**
 * This is the definition for the intermediate representation of the flowchart.
 * 
 * We're implementing this as a dictionary of nodes, with node IDs being the
 * keys, but changing this to a list of nodes, where the node IDs are contained
 * in the nodes themselves would be another option which could help in managing
 * complexity for very large workflows. (we'll consider it when it becomes a 
 * problem...
 *
 */


var workflow = {
  /*
   * The `_config` keyword is reserved for flowchart-wide configuration. 
   * Normal nodes in the flowchart may not begin with an underscore character,
   * as this is reserved for control & configuration.
   */
  _config: {
    /*
     * Start is the ID of the starting node. 
     * In the future, there may be more advanced features, such as starting on
     * a different node depending on the data sent in to the application to 
     * begin with. At this moment, there can only be 1 start node.
     */
    start: "pet-ownership",
    /*
     * Once an endpoint has been reached, the accumulated data is sent as a 
     * HTTP POST message encoded in JSON. This is the url to be POSTed to.
     * In the future, individual nodes may be capable of triggering a callback.
     *
     * If this value is not specified, the application will save the data for
     * it to be collected by the application owner at a later date.
     */
    callback_url: "http://example.com/form_callback"
  },

  /*
   * This is a binary choice node. It gives the user the choice between two 
   * options, by default 'Yes' and 'No'. The defaults can be overriden as 
   * shown below. 
   * 
   * For questions that do not fit the Yes/No format, it is recommended to use
   * a 'choice' node instead, even if the choice is binary, as the formatting 
   * for binary choices will reflect 
   * 
   * This node's ID is 'pet-ownership?'. 
   * 
   * Node IDs can be opaque: 'adtad-yrkjv-kwjhg-ewwoe-refdi' is a perfectly
   * valid node ID.
   */
  "pet-ownership?": {
    /*
     * We explicitly define the node type to make dispatching on it easier.
     * All nodes have a 'type' variable.
     */
    type: "binary",
    /*
     * The 'text' variable is what will be displayed to the user to prompt for 
     * input. 
     * 
     * This field does not currently support any markup. It is undecided 
     * whether this will support html, markdown or another markup in the 
     * future, and how this will interact with the flowchart representation of 
     * the workflow.
     */
    text: "Do you have any pets?",
    /*
     * The 'yes' and 'no' choice can simply be a node id to target. This will 
     * allow default text values for the choices ('Yes' and 'No').
     */
    yes: "inform-adorable",
    /*
     * The yes and no choices can also override the default text by providing
     * an object as follows:
     */
    no: { text: "No :(", target: "end-getsome" }
  },

  /*
   * The 'end' node is perhaps the simplest of them all. It has only two 
   * fields, a type field for dispatch, and a text field for display.
   */
  "end-getsome": {
    type: "end",
    text: "You should get a dog"
  },
  
  /*
   * The inform node simply displays information to the user. This can be used
   * to explain policies, provide statutory warnings, etc.
   */
  "inform-adorable": {
    type: "inform",
    text: "Aren't pets adorable! Squeee!",
    target: "pet-kind?"
  },

  /*
   * Choice nodes are arbitrary choices amongst a sample.
   */
  "pet-kind?": {
     type: "choice",
     text: "What kind of pet(s) do you have?",
     /*
      * There must be one or more choice for this node to be valid.
      */
     choices: [
       {text: "A slippery water dweller", target:"fish"},
       {text: "A furry quadruped", target:"furry-quad"},
       {text: "A more exotic creature", target:"exotic"}
     ]
  },

  /*
   * Here we have our first input node.
   * 
   * This simple node requests a numeric input from the user. We also see a 
   * range validator for numeric input, which restricts the possible values
   * that are accepted.
   */
  "fish": {
    text: "I'm guessing it's a fish. What temperature does your fish prefer?",
    type: "input",
    input: {
      /*
       * To enable type dispatch semantics similar to the node type dispacth,
       * we explicitly specify an input type. Not specifying an input type 
       * will create a generic entry where the user is free to input anything.
       * 
       * The numeric type accepts any well formed number, including floating 
       * points and negative numbers. 
       */
      type: "number",
      /*
       * This optional range is only meaningful for the numeric input type.
       */
      range: { 
        max: 100, 
        min: 0, 
        message: "I don't think any fish could survive that!"
      }
    },
    target: "pet-name"
  },

  /*
   * This next node is a choice amongst many. Choice must be unique. How this
   * is implemented (radio buttons/dropdown) depends on the implementation and
   * may be dynamic.
   */
  "furry-quad": {
    type: "input",
    text: "How much do you love your furry quadruped?",
    input:{
      type: "unique",
      choices:["A little", "Some", "A Lot!"]
    },
    target: "pet-name"
  },

  /*
   * This input type lets the user select multiple choices amongst many.
   * checkboxes would be a suitable implementation for this node.
   */
  "exotic":{
    type: "input",
    text: "What features does your exotic pet have?",
    input: {
      type: "multi",
      choices:["Prehensile Tail", "Wings", "Scales", "Claws", "Flat tail"]
    },
    target: "pet-name"
  }

  /*
   * Open ended text field. Future may support custom validators for things 
   * like emails, passwords, item IDs, Unit IDs, etc...
   */
  "pet-name": {
    type:"input",
    text: "What is your Pet's name",
    input: { 
      type:"text",
      /*
       * Optional maxchar field restricts the length of the field. The length
       * of the field will determine the size of the input box. 
       */
      maxchar: 120,
      /*
       * Useful optional restrictions per words, not characters. Example use 
       * would be an application form.
       */
      maxwords: 12,
    },
    target: "when-met"
  }
  
  /*
   * Date input
   */
  "when-met": {
    type: "input",
    text: "When did you first meet your pet?",
    input: { 
      type:"date",
      /* Optional ISO date strings */
      earliest: "2013-08-08", 
      latest: "2100-10-10"
    },
    target: "fini"
  }

  "fini": {
    type: "end",
    text: "Thankyou for completing our survey!"
  }
}

