const tipForm1 = document.querySelector(".Thailand1 .tip_form");
const tip1 = document.querySelector(".Thailand1 .tip_form input");
const tipList1 = document.querySelector(".Thailand1 .tip_list");

const KEY_NAME1 = "story1";
let ARRAY1 = [];

function savetip1(event){
    event.preventDefault();
    const story = tip1.value; 
    tip1.value = "";
    const now = new Date().getTime();
    const storyObj = {
        text: story,
        id: now,
    }
    ARRAY1.push(storyObj);
    save1();
    gettip1(storyObj);
}

function save1(){
    localStorage.setItem(KEY_NAME1, JSON.stringify(ARRAY1));
}

function gettip1(story) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    tipList1.appendChild(li);
    li.className = story.id;
    li.appendChild(span);
    span.innerText = story.text;
    li.appendChild(button);
    button.innerText = "×";
    button.addEventListener("click", deleteStory1);
}

function deleteStory1(event){
    const li = event.target.parentElement;
    const liId = parseInt(li.className); 
    li.remove();
    ARRAY1 = ARRAY1.filter((event) => {return event.id !== liId});
    save1();
} 

tipForm1.addEventListener("submit", savetip1);

const getStory1 = JSON.parse(localStorage.getItem(KEY_NAME1)); 

if(getStory1 !== null){
    ARRAY1 = getStory1;
    getStory1.forEach((text) => {gettip1(text)});
}
