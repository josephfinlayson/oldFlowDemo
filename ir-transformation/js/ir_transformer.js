// callback types
//    type: "binary",
//    type: "inform",
//    type: "end",
// 	  type: "choice",
//    type: "input", -  number
//    type: "input", -type: "unique",
//    type: "input" - "multi",
//    type:"input" - type:"text",
//    type: "input", -  type:"date",

//predefine selectors to increase speed
$response = $('#response');
$questions = $('#question');
$submit = $('#submit')

function callback_director(qid) {
    $(response).html('');
    $(submit).html('');

    console.log(flow[qid].type);
    switch (flow[qid].type) {
    case "binary":
        binary_callback(flow[qid]);
        break;
    case "inform":
        inform_callback(flow[qid]);
        break;
    case "end":
        end_callback(flow[qid]);
        break;
    case "choice":
        choice_callback(flow[qid]);
        break;
    case "input":
        console.log(flow[qid].input.type);
        switch (flow[qid].input.type) {
        case "number":
            number_callback(flow[qid]);
            break;
        case "unique":
            unique_callback(flow[qid]);
            break;
        case "multi":
            multi_callback(flow[qid]);
            break;
        case "text":
            text_callback(flow[qid]);
            break;
        case "date":
            date_calback(flow[qid])
            break;
        default:
            alert("invalid input type");
            break;

        }
        break;
    default:
        alert("invalid choice type");
        break;

    }
}

function binary_callback(qid) {

    //  "pet-ownership?": {
    //   type: "binary",
    //   text: "Do you have any pets?",
    //   yes: "inform-adorable",
    //   no: { text: "No :(", target: "end-getsome" }
    // },
    question_text(qid.text);

    if (qid.yes.text) {
        choice_text(qid.yes.text, qid.yes.target);
    } else {
        choice_text('Yes', qid.yes.target);
    }

    if (qid.no.text) {
        choice_text(qid.no.text, qid.no.target);
    } else {
        choice_text('No', qid.no.target);
    }

}

function inform_callback(qid) {

    // "inform-adorable": {
    //   type: "inform",
    //   text: "Aren't pets adorable! Squeee!",
    //   target: "pet-kind?"
    // },

    question_text(qid.text);

    choice_text('continue', qid.target);
}

function end_callback(qid) {

    // "fini": {
    //   type: "end",
    //   text: "Thankyou for completing our survey!"
    // }

    question_text(qid.text);



}

function choice_callback(qid) {

    // "pet-kind?": {
    //    type: "choice",
    //    text: "What kind of pet(s) do you have?",
    //    choices: [
    //      {text: "A slippery water dweller", target:"fish"},
    //      {text: "A furry quadruped", target:"furry-quad"},
    //      {text: "A more exotic creature", target:"exotic"}
    //    ]
    // },

    question_text(qid.text);
    qid.choices.forEach(function (choice) {
        choice_text(choice.text, choice.target);
    });

}




function number_callback(qid) {
    question_text(qid.text);

    // "fish": {
    //   text: "I'm guessing it's a fish. What temperature does your fish prefer?",
    //   type: "input",
    //   input: {
    //     type: "number",
    //     range: { 
    //       max: 100, 
    //       min: 0, 
    //       message: "I don't think any fish could survive that!"
    //     }
    //   },
    //   target: "pet-name"
    console.log(qid);
    console.log(qid.input);
    a = [];
    for (var i = qid.input.range.min; i < qid.input.range.max + 1; i++) {
        a.push(i);
    }
    $(response).append('<select>');
    a.forEach(function (element, index, arr) {
        $('select')
            .append($("<option>")
                .html(element));
    });

    submitter(qid.target);

}

function unique_callback(qid) {

    //  "furry-quad": {
    //   type: "input",
    //   text: "How much do you love your furry quadruped?",
    //   input:{
    //     type: "unique",
    //     choices:["A little", "Some", "A Lot!"]
    //   },
    //   target: "pet-name"
    // },


    question_text(qid.text);

    qid.input.choices.forEach(function (string) {

        $(response).append('<input type = "radio"> <label>' + string + '</label>)');

    });
    submitter(qid.target);
}


function multi_callback(qid) {

    // "exotic":{
    //   type: "input",
    //   text: "What features does your exotic pet have?",
    //   input: {
    //     type: "multi",
    //     choices:["Prehensile Tail", "Wings", "Scales", "Claws", "Flat tail"]
    //   },
    //   target: "pet-name"
    // },

    question_text(qid.text);

    qid.input.choices.forEach(function (string) {

        $(response).append('<input type = "checkbox"> </input><label>' + string + '</label>)');

    });

    submitter(qid.target);

}

function text_callback(qid) {

    // "pet-name": {
    //     type:"input",
    //     text: "What is your Pet's name",
    //     input: { 
    //       type:"text",
    //       maxchar: 120,
    //       maxwords: 12,
    //     },
    //     target: "when-met"
    //   },

    question_text(qid.text);

    $(response).append('<input type ="text"></input>');

    submitter(qid.target);

}

function date_calback(qid) {

    // "when-met": {
    //   type: "input",
    //   text: "When did you first meet your pet?",
    //   input: { 
    //     type:"date",
    //     earliest: "2013-08-08", 
    //     latest: "2100-10-10"
    //   },
    //   target: "fini"
    // },


    question_text(qid.text);

    $(response).append(function () {
        return $('<input type ="text"></input>')
            .datepicker();
    });

    submitter(qid.target);

}

function question_text(text) {

    $("#question").html("<p>" + text + "</p>");

}

function choice_text(text, target) {

    $(response).append(function () {
        return $('<div>' + text + '</div>').click(function () {
            callback_director(target);
        });
    });
}

function submitter(target) {

    $(submit).append(function () {
        return $('<input type=submit>').click(function (event) {
            callback_director(target);
        });
    });


}

$(document).ready(function () {
    callback_director("pet-ownership");
});