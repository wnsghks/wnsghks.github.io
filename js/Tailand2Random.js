const T2Image = ["파타야1.jpg", "파타야2.jpg", "파타야3.jpg", "파타야4.jpg"];

const T2Bk = document.querySelector(".Thailand2");
const bgT2Image = document.createElement("img"); 
bgT2Image.classList.toggle("AD");
T2Bk.appendChild(bgT2Image); 

function chageT2(){
    const randomT2Image = Math.floor(Math.random()*T2Image.length);
    bgT2Image.src = `image/태국_파타야/${T2Image[randomT2Image]}`
}

chageT2();
setInterval(chageT2, 10000);
