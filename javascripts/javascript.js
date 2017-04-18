console.log("hello!");

var saywhat = document.getElementById("output");

var articleItems = document.getElementsByClassName("article-section");
console.log("article-section", articleItems);

function handleClick(taco){
	console.log(taco);
	var elementText = taco.target.innerHTML;
	saywhat.innerHTML = "You clicked on " + elementText;
}

for (var i = 0; i < articleItems.length; i++){
	articleItems.item(i).addEventListener("click", handleClick);
}

var header = document.getElementById("page-header");

function handleHeaderMouseOver(event){
	saywhat.innerHTML = "The force is strong with this one.";
}

function handleHeaderMouseOut(event){
	saywhat.innerHTML = "Remember, the Force will be with you...";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);


var inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event){
	console.log("event", event);
	saywhat.innerHTML = event.target.value;
});

var obiwan = document.getElementById("obi-wan");

document.getElementById("add-color")
	.addEventListener("click", function(){
		obiwan.classList.toggle("blue");
	});


document.getElementById("make-large")
	.addEventListener("click", function(){
		obiwan.classList.toggle("large");
	});

document.getElementById("add-border")
	.addEventListener("click", function(){
		obiwan.classList.toggle("bordered");
	});


document.getElementById("add-rounding")
	.addEventListener("click", function(){
		obiwan.classList.toggle("rounded");
	});



document.getElementById("wrapper").addEventListener("click", function(event){
	console.log("target", event.target);
	console.log("currentTarget", event.currentTarget);
	if (event.target.tagName.toLowerCase() === "li"){
		console.log("You clicked on an <li> element");
	}

	if (event.target.className === "article-section"){
		console.log("You clicked on an 'article-section' element.");
	}
	if (event.target.id === "page-title"){
		console.log("You clicked on the page-title element.");
	}

});

var quotesArray = [
	"A long time ago in a galaxy far, far away…",
	"Use the force, Luke.",
	"The force is strong with this one.",
	"Do. Or do not. There is no try.",
	"Fear is the path to the dark side.",
	"Someday I will be the most powerful Jedi ever.",
	"You were the chosen one!"
];

quotesArray.forEach(function(quote, index){
	var quoteBlock = `<div id="quote--${index}">
						<h3>"${quote}" - Star Wars</h3>
					 </div>`;
	var quoteDiv = document.createElement("div");
	quoteDiv.innerHTML = quoteBlock;
	document.getElementById("stickItHere").appendChild(quoteDiv);
	var quoteDom = document.getElementById(`quote--${index}`);
	quoteDom.addEventListener("click", function(){
		console.log("clickEvent", event.currentTarget, event.target);
		event.currentTarget.classList.add("red");
	});
});

// inside ${} is what is evaluated

// in forEach (function(quote, index) ... quote is placeholder, could be taco, refers to item in the array, and index marks the place in the array


























