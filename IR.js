/**
 * This is the definition for the intermediate representation of the flowchart.
 * 
 * We're implementing this as a dictionary of nodes, with node IDs being the
 * keys, but changing this to a list of nodes, where the node IDs are contained
 * in the nodes themselves would be another option which could help in managing
 * complexity for very large workflows. (we'll consider it when it becomes a 
 * problem...
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
     * The special value 'SAVE' tells the application to save the data to be
     * recoverd by the owner of the workflow at a later time. 
     */
    callback_url: "SAVE"
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
   * This node's ID is 'pet-ownershipi?'. 
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
        return target;
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
  }

  /*
   * The 'end' node is perhaps the simplest of them all. It has only two 
   * fields, a type field for dispatch, and a text field for display.
   */
  "end-getsome" : {
    type: "end",
    text: "You should get a dog"
  }
  
  /*
   * The inform node simply displays information to the user. This can be used
   * to explain policies, provide statutory warnings, etc.
   */
  "inform-adorable": {
    type: "inform",
    text: "Aren't pets adorable! Squeee!",
    target: "pet-kind?"
  }

 /*
  * Choice nodes are arbitrary choices amongst a sample.
  */

}

