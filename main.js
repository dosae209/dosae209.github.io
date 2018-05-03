var button = document.getElementById('myBtn');
var pElement = document.getElementById('p-tag'); 
function popUp() {
    alert("subscribe to mint magazine for $16.00 a month per issue"); 
}


button.addEventListener("click", popUp);
button.addEventListener("click", changeCSS); 


var elementToChange = document.getElementsByTagName("body")[0];
 elementToChange.style.cursor = "url('cursor url with protocol'), auto";


 popupS.window({
    mode: 'alert',
    content: 'stay fresh'
});





