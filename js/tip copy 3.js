const tipForm3 = document.querySelector(".England .tip_form");
const tip3 = document.querySelector(".England .tip_form input");
const tipList3 = document.querySelector(".England .tip_list");

const KEY_NAME3 = "story3";
let ARRAY3 = [];

function savetip3(event){
    event.preventDefault();
    const story = tip3.value; 
    tip3.value = "";
    const now = new Date().getTime();
    const storyObj = {
        text: story,
        id: now,
    }
    ARRAY3.push(storyObj);
    save3();
    gettip3(storyObj);
}

function save3(){
    localStorage.setItem(KEY_NAME3, JSON.stringify(ARRAY3));
}

function gettip3(story) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    tipList3.appendChild(li);
    li.className = story.id;
    li.appendChild(span);
    span.innerText = story.text;
    li.appendChild(button);
    button.innerText = "×";
    button.addEventListener("click", deleteStory3);
}

function deleteStory3(event){
    const li = event.target.parentElement;
    const liId = parseInt(li.className); 
    li.remove();
    ARRAY3 = ARRAY3.filter((event) => {return event.id !== liId});
    save3();
} 

tipForm3.addEventListener("submit", savetip3);

const getStory3 = JSON.parse(localStorage.getItem(KEY_NAME3)); 

if(getStory3 !== null){
    ARRAY3 = getStory3;
    getStory3.forEach((text) => {gettip3(text)});
}
