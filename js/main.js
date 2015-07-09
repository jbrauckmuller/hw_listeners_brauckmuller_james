var addText = document.getElementById('addp');
var textSizeL = document.getElementById('textsizel');
var textSizeXL = document.getElementById('textsizexl');
var footer = document.getElementById('footer');


// Listener fires when button is clicked and clones last child of the element, adding it to the bottom
addText.addEventListener('click', function(){
	console.log("this is it")
	var ptag = document.getElementById("content").lastElementChild;
    var clone = ptag.cloneNode(true);
    document.getElementById("content").appendChild(clone);
});


// Listener fires when button is clicked and increases the article font size to Large
textSizeL.addEventListener('click', function() {
	console.log("this is it")
	var content = document.getElementById('content');
	content.style.fontSize = ('large');
});


// Listener fires when button is clicked and increases the article font size to X-Large
textSizeXL.addEventListener('click', function() {
	console.log("this is it")
	var content = document.getElementById('content');
	content.style.fontSize = ('x-large');
});


// Listener fires when you mouseover the footer and lightens the font color

footer.addEventListener('mouseover', function(){
	console.log('this is working?')
	footer.style.color = '#f1f2f2';
});

// Listener fires when you mouse out of the footer and darkens the font color to its initial color

footer.addEventListener('mouseout', function(){
	console.log('this is working?')
	footer.style.color = '#939598';
});

