const eImage = ["영국1.jpg", "영국2.jpg", "영국3.jpg"];

const englandBk = document.querySelector(".England");
const bgEImage = document.createElement("img"); 
bgEImage.classList.toggle("AD");
englandBk.appendChild(bgEImage);

function chageE(){
    const randomEImage = Math.floor(Math.random()*eImage.length);
    bgEImage.src = `image/영국_런던/${eImage[randomEImage]}`
}

chageE();
setInterval(chageE, 10000);
