var buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (s) {
    var z = s.clientX - s.target.offsetLeft;
    var y = s.clientY - s.target.offsetTop;

    var click = document.createElement("span");
    click.style.position = "absolute";
    click.style.left = z + "px";
    click.style.top = y + "px";
    // click.classList.add("click-effect"); // Adding a class for styling purposes

    this.appendChild(click);

    setTimeout(() => {
      click.remove();
    }, 800);
  });
});
