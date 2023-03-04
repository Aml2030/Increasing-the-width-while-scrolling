let section = document.querySelector(".three");
let spans = document.querySelectorAll(".skills .one");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 220) {
    spans.forEach((s) => {
      s.style.width = s.dataset.width;
    });
  }
};
