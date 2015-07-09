var header = document.getElementById('head');
var i = 0;

header.addEventListener("click", function() {
	i++;
	var node = document.createElement("p");
    var textnode = document.createTextNode("This is click number " + i);
    node.appendChild(textnode);
    document.getElementById("paragraph").appendChild(node);
});
