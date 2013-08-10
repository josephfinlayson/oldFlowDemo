Notes
=====

Possible demos
--------------

'Which of these is better?' repeated binary choice classifier. Requires node
callbacks and dynamic node text.


Types of Nodes
--------------

So far, MVP nodes are:

 * inform
 * choice
 * binary (subset choice)
 * end (subset inform)
 * input 

Possible future nodes:

 * dynamic-choice (silent choice made based on accumulated data)
 * dynamic-inform (contents depends on accumulated data)

Types of input
--------------

 * number
 * unique (one amongst many)
 * multi  (many amongst many)
 * text (text field)
 * date

Future:
 * poly - multiple inputs (creates a form)
 * file upload
 * credit card
 * color
 * address
 * telephone
 * time
 * month, week, day
 * password

Implementation
--------------

### Main objects

 - **Node** A node.
 - **Flow** The flow itself, with configuration and nodes
 - **AccumulatedData** The accumulated data and choices of a user's progression through the workflow. This is what is passed to the callback. This also allows history.


### Type dispatching

The dispatching on node type can be carried out by using a dict of handlers.

    { 'binary': function(node){/*do stuff*/} }

This also allows node transformations to be used to simplify handling:

    function binary2choice() // transforms a binary node to a choice node.

So that handlers have to be written only for a handful of functions. 
For example:

    function binary2choice(binary_node){} //-> choice_node

    function handle_choice(choice_node){} //-> next_node_id

    dispatch: {
      'choice' : handle_choice,
      'binary' : function (binary_node){
        return handle_choice(binary2choice(binary_node));
      }
      'end' : function (end_node){
        handle_inform(end2inform(end_node));
        trigger_callback(flow);
        return null;
      }
    }

This also allows separate dispatchers for different applications.

Future
------
 * Input validation
 * Node callbacks (nodes can trigger actions elsewhere)
 * Dynamic nodes (nodes depend on accumulated data)
 * Flow validators (Is this a valid flow?)
 * Flow Data validators (have I collected this data from each branch?)
