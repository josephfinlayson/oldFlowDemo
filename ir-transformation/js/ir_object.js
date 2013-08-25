

var workflow = {
  _config: {
    start: "pet-ownership",
    callback_url: "http://example.com/form_callback"
  },

  "pet-ownership?": {
    type: "binary",
    text: "Do you have any pets?",
    yes: "inform-adorable",
    no: { text: "No :(", target: "end-getsome" }
  },

  "end-getsome": {
    type: "end",
    text: "You should get a dog"
  },
  
  "inform-adorable": {
    type: "inform",
    text: "Aren't pets adorable! Squeee!",
    target: "pet-kind?"
  },

  "pet-kind?": {
     type: "choice",
     text: "What kind of pet(s) do you have?",
     choices: [
       {text: "A slippery water dweller", target:"fish"},
       {text: "A furry quadruped", target:"furry-quad"},
       {text: "A more exotic creature", target:"exotic"}
     ]
  },

  "fish": {
    text: "I'm guessing it's a fish. What temperature does your fish prefer?",
    type: "input",
    input: {
      type: "number",
      range: { 
        max: 100, 
        min: 0, 
        message: "I don't think any fish could survive that!"
      }
    },
    target: "pet-name"
  },

  "furry-quad": {
    type: "input",
    text: "How much do you love your furry quadruped?",
    input:{
      type: "unique",
      choices:["A little", "Some", "A Lot!"]
    },
    target: "pet-name"
  },

  "exotic":{
    type: "input",
    text: "What features does your exotic pet have?",
    input: {
      type: "multi",
      choices:["Prehensile Tail", "Wings", "Scales", "Claws", "Flat tail"]
    },
    target: "pet-name"
  },

  "pet-name": {
    type:"input",
    text: "What is your Pet's name",
    input: { 
      type:"text",
      maxchar: 120,
      maxwords: 12,
    },
    target: "when-met"
  },
  
  "when-met": {
    type: "input",
    text: "When did you first meet your pet?",
    input: { 
      type:"date",
      earliest: "2013-08-08", 
      latest: "2100-10-10"
    },
    target: "fini"
  },

  "fini": {
    type: "end",
    text: "Thankyou for completing our survey!"
  }
};


