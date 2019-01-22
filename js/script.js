
$(document).ready(function(){
  $(".solution-button").click(function(){
  	var parent = $(this).closest("div")
  	var solution = parent.children(".solution-text")
    $(solution).toggle();
  });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-button").style.display = "block";
  } else {
    document.getElementById("scroll-button").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}