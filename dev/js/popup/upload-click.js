

function hideShowPopup() {
    var x = document.getElementById("moon-crescent");

    if (x.style.display === "none") {

      x.style.display = "block";

    } else {

      x.style.display = "none";
    }
  }

var sun = document.querySelector('#sun');

window.onclick = function(event){

    if(event.target == sun){
        
        hideShowPopup();
    }
}
