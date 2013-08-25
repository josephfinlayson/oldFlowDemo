var flow = {
  questionDate : {
    question: "Have you organised a date for your Startup Weekend?",
    options: [
    	{option:"yes", target:"questionClash"},
    	{option:"no", target:"infoDoDate"}
    ]
  },
  questionClash : {
  	question: "Does it clash with other tech events?",
  	options: [
    	{option:"yes", target:"infoWhoops"},
    	{option:"no", target:"questionVenue"}
  	]
  },
  infoWhoops : {
  	question: "Whoops! Check meetups.com, google to make sure nothing is happening in your city!",
  	options: [
    	{option:"I will do so", target:"questionVenue"},
  	]
  },

  infoDoDate : {
  	question: "Pick one!",
  	options: [
  	{option:"I will do so", target:"questionVenue"}
  	]
  },
  questionVenue : {
  	question: "Do you have a venue?",
  	   options: [
    	{option:"yes", target:"questionCash"},
    	{option:"no", target:"infoGetVenue"},
  ]
},
  
 infoGetVenue : {
  	question: "Find one!",
  	   options: [
    	{option:"Sure thing", target:"questionCash"},
		  ]
},

  questionCash : {
  	question : "Do you have the cash to fund your event?",
	  	options: [
	  	    {option:"yes", target:"infoGetMore"},
	    	{option:"no", target:"infoGetSome"},
	  	]  	
  },

infoGetSome : {
	question: "Get some cash",
	options : [
	{option: "I will do so", target: "questionHowMuch"},
	]
},


infoGetMore:{
	question: "Get more cash",
	options : [
	{option:"Uh... OK", target : "questionHowMuch"},
]
},

infoOverBudget: {
	question: "You're over budget!",
	options : [
		{option:"I will spend less!", target : "questionHowMuch"},
]	
},

questionHowMuch : {
	question : "How much cash do you actually have?",	
	input : null, 
  	target: "questionBeerOrder",
},

questionBeerOrder : {
	question : "How much beer did you order per person?",
	dropdown : 50,
	target: "questionHowMuchFood",
	input: "",
},

infoGoodWeekend : {
	question : "Sounds like it's going to be a smashing weekend!",
	options : [
		{option:"Uh... OK", target : "questionHowMuchFood"},
	]
},

questionHowMuchFood : {
	question : "How much will you spend on food?",
	input : null,
	target : "questionHowMuchFacilitator",
},

questionHowMuchFacilitator : {
	question : "How much did you spend on facilitators?",
	input : null,
	target : "Finish",
},

Finish : {
	question : "Congrats, now it's time to get some participants",
	options : [
		{option:"Wahay - again?", target : "questionDate"},
	]
},


// venue
//cash - get more get some
//how much Data input
// do you have speaker
// do you have coaches
// how much beer did you order 1-10, 11-20
// how much will you spend on food
// How much will you spend of facilitator
//automatic step
//great - now you're ready!


  endfat: {end: "Fat"},
  endthin: {end: "thin"},
  endtall: {end: "tall"},
  endnorm: {end: "normal"}
};

function loadstate(qid){
	if ((qid=="questionHowMuchFood")&&(flow["questionBeerOrder"].input>20)){
		flow["questionBeerOrder"].input = 0;
		loadstate("infoGoodWeekend");
	}
	else if ((qid=="Finish")&&((flow["questionHowMuchFood"].input) + (flow["questionHowMuchFacilitator"].input)) > flow["questionHowMuch"].input)
		{
		flow["questionHowMuch"].input = null;
		flow["questionHowMuchFood"].input = null;
		flow["questionHowMuchFacilitator"].input = null;

		loadstate("infoOverBudget");
	}
	else if(flow[qid].options){
		$("#questionsbox").html("<p>"+flow[qid].question+"</p>");
		$("#a1").html("");
	    flow[qid].options.forEach(function(element, index, arr){
	    	var link = $("<a>")
		    	.addClass('links')
		    	.text(element.option)
		    	.click(function(){
		    		loadstate(element.target);
		    	});
	    	$("#a1").append(link);
	    });
	    }
	    else if((flow[qid].input)===null) {
		$("#questionsbox").html("<p>"+flow[qid].question+"</p>");
		$("#a1").html("");
				var input = $("<input>")
		    	.attr('id', 'numberinput')
		    	.attr('placeholder', 'type something here...')	
	    	$("#a1")
	    		.html(input)
	    		.append($("<button>").text("Submit").click(function(){
	    			flow[qid].input = input.val();
	    			console.log(flow[qid].input);
	    			console.log(flow[qid].target);
	    			loadstate(flow[qid].target);
	    		}));

		}else if (flow[qid].dropdown){
		$("#questionsbox").html("<p>"+flow[qid].question+"</p>");
		$("#a1")
			.html("")
			.html($("<select>").attr("id","selector"))
			.append(($("<button>").text("Submit").attr("id","submit")));

		a=[];
		for (var i=0; i<(flow[qid].dropdown)+1; i++)
			{ 
				a.push(i);
			}
			    a.forEach(function(element, index, arr){
			    $("#selector")
			    .append($("<option>")
			    .html(element));
			});
			$("#submit").click(function(){
	    			flow[qid].input = $('#selector option:selected').val();
	    			console.log(flow[qid].input);
	    			loadstate(flow[qid].target);
	    		});

		}
	else{
        $("#questionsbox").html("<p>"+flow[qid].end+"</p>");
        $("#a1").html("");
	}
}

$(document).ready(function(){
  loadstate("questionDate");
});
