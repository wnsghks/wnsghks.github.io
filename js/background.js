const image = ["표지1.jpg", "표지2.jpg", "표지3.jpg", "표지4.jpg"];
const randomImage = Math.floor(Math.random()*image.length);

const body = document.querySelector("body");
const bgImage = document.createElement("img"); 
bgImage.classList.toggle("shadow");

bgImage.src = `image/${image[randomImage]}`
body.appendChild(bgImage);

