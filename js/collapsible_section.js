var collapsible_buttons = document.getElementsByClassName("collapsible");

for (var i = 0; i < collapsible_buttons.length; i++) {

  collapsible_buttons[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var collapsible = this.nextElementSibling;
    var icon = this.querySelector('.right-aligned-plus');

    //console.log("Button pressed!");
    if (collapsible.style.display === "block") {

      collapsible.style.display = "none";
      icon.innerHTML="+";  

    } else {
      collapsible.style.display = "block";
      icon.innerHTML="-";
    }
  });
}