// -------------------------Navbar shadow start--------------------------------

$(document).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 50)
        $(".navbar").addClass("nav-shadow")
    else
        $(".navbar").removeClass("nav-shadow")
})

// -------------------------Navbar shadow end--------------------------------





// -------------------------toggle close end--------------------------------



// -------------------------toggle close end--------------------------------







var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}