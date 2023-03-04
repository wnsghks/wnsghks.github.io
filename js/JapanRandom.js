const jImage = ["일본1.jpg", "일본2.jpg", "일본3.jpg", "일본4.jpg", "일본5.jpg", "일본6.jpg"];

const japanBk = document.querySelector(".Japan");
const bgJImage = document.createElement("img"); 
bgJImage.classList.toggle("AD");
japanBk.appendChild(bgJImage);

function chageJ(){
    const randomJImage = Math.floor(Math.random()*jImage.length);
    bgJImage.src = `image/일본_삿포로/${jImage[randomJImage]}`
}

chageJ();
setInterval(chageJ, 10000);
