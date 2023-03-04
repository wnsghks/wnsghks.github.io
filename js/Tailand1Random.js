const T1Image = ["방콕1.jpg", "방콕2.jpg", "방콕3.jpg", "방콕4.jpg"];

const T1Bk = document.querySelector(".Thailand1");
const bgT1Image = document.createElement("img"); 
bgT1Image.classList.toggle("AD");
T1Bk.appendChild(bgT1Image); 

function chageT1(){
    const randomT1Image = Math.floor(Math.random()*T1Image.length);
    bgT1Image.src = `image/태국_방콕/${T1Image[randomT1Image]}`
}

chageT1();
setInterval(chageT1, 10000);
