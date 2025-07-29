const images = ["1.webp", "2.webp", "3.webp"];
let index = 0;

const img = document.getElementById("slider-image");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

function showImage(i) {
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = images[i];
    img.style.opacity = 1;
  }, 500);
}

next.addEventListener("click", () => {
  index = (index + 1) % images.length;
  showImage(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});

setInterval(() => {
  index = (index + 1) % images.length;
  showImage(index);
}, 4000);
