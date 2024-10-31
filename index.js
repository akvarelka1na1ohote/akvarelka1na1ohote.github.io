var button = document.getElementById('myButton');
var button1 = document.getElementById('myButton-1');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');


button.onclick = function() {
    modal.style.display = "block";
}

button1.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}


var CapybaraButton = document.getElementById('CapybaraButton');
var CapybaraModal = document.getElementById('CapybaraModal');
var CapybaraClose = document.getElementById('CapybaraClose');


CapybaraButton.onclick = function() {
    CapybaraModal.style.display = "block";
}

CapybaraClose.onclick = function() {
    CapybaraModal.style.display = "none";
}


