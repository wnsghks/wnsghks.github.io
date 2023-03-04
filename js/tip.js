const tipForm = document.querySelector(".tip_form");
const tip = document.querySelector(".tip_form input");
const tipList = document.querySelector(".tip_list");

const KEY_NAME = "story";
let ARRAY = [];

function savetip(event){
    event.preventDefault();
    const story = tip.value; 
    tip.value = "";
    const now = new Date().getTime();
    const storyObj = {
        text: story,
        id: now,
    }
    ARRAY.push(storyObj);
    save();
    gettip(storyObj);
}

function save(){
    localStorage.setItem(KEY_NAME, JSON.stringify(ARRAY));
}

function gettip(story) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    tipList.appendChild(li);
    li.className = story.id;
    li.appendChild(span);
    span.innerText = story.text;
    li.appendChild(button);
    button.innerText = "×";
    button.addEventListener("click", deleteStory);
}

function deleteStory(event){
    const li = event.target.parentElement;
    const liId = parseInt(li.className); 
    li.remove();
    ARRAY = ARRAY.filter((event) => {return event.id !== liId});
    save();
} 

tipForm.addEventListener("submit", savetip);

const getStory = JSON.parse(localStorage.getItem(KEY_NAME)); 

if(getStory !== null){
    ARRAY = getStory;
    getStory.forEach((text) => {gettip(text)});
}
