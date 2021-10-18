var btn = document.getElementById("myBtn");

// Get the modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");

btn.onclick = function(){
  modal.style.display = "block";
  
  modalImg.src = "https://lgentile13.github.io/EscapeRoom/HINT2.1.jpg";
  
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}