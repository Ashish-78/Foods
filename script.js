// ------------ Menu animation ------------

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});
// ------------ End of Menu animation ------------

// ------------ Icons animation start--------------

const icons = document.querySelectorAll(".section-1-icons i");

let i = 1;
setInterval(() => {
  i++;

  const icon = document.querySelector(".section-1-icons .change");

  // to hide current icon
  icon.classList.remove("change");

  if (i > icons.length) {
    //restarting the animation icon loop
    icons[0].classList.add("change");
    i = 1;
  } else {
    //adding the change class to the next icon
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);
// ------------End of Icons animation --------------
