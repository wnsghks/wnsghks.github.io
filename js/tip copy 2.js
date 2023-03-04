const tipForm2 = document.querySelector(".Thailand2 .tip_form");
const tip2 = document.querySelector(".Thailand2 .tip_form input");
const tipList2 = document.querySelector(".Thailand2 .tip_list");

const KEY_NAME2 = "story2";
let ARRAY2 = [];

function savetip2(event){
    event.preventDefault();
    const story = tip2.value; 
    tip2.value = "";
    const now = new Date().getTime();
    const storyObj = {
        text: story,
        id: now,
    }
    ARRAY2.push(storyObj);
    save2();
    gettip2(storyObj);
}

function save2(){
    localStorage.setItem(KEY_NAME2, JSON.stringify(ARRAY2));
}

function gettip2(story) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    tipList2.appendChild(li);
    li.className = story.id;
    li.appendChild(span);
    span.innerText = story.text;
    li.appendChild(button);
    button.innerText = "×";
    button.addEventListener("click", deleteStory2);
}

function deleteStory2(event){
    const li = event.target.parentElement;
    const liId = parseInt(li.className); 
    li.remove();
    ARRAY2 = ARRAY2.filter((event) => {return event.id !== liId});
    save2();
} 

tipForm2.addEventListener("submit", savetip2);

const getStory2 = JSON.parse(localStorage.getItem(KEY_NAME2)); 

if(getStory2 !== null){
    ARRAY2 = getStory2;
    getStory2.forEach((text) => {gettip2(text)});
}
