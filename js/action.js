const Japan = document.querySelector(".Japan");
const Thailand1 = document.querySelector(".Thailand1");
const Thailand2 = document.querySelector(".Thailand2");
const England = document.querySelector(".England");

function action(){
  const information = document.querySelector(".Japan .information")
  information.classList.remove("hide");
  const tip = document.querySelector(".Japan .tip")
  tip.classList.remove("hide");

  Japan.classList.add("action");
  Thailand1.classList.add("notAction");
  Thailand2.classList.add("notAction");
  England.classList.add("notAction");
}

function action1(){
  const information = document.querySelector(".Thailand1 .information")
  information.classList.remove("hide");
  const tip = document.querySelector(".Thailand1 .tip")
  tip.classList.remove("hide");
  
  Japan.classList.add("notAction");
  Thailand1.classList.add("action");
  Thailand2.classList.add("notAction");
  England.classList.add("notAction");
}

function action2(){
  const information = document.querySelector(".Thailand2 .information")
  information.classList.remove("hide");
  const tip = document.querySelector(".Thailand2 .tip")
  tip.classList.remove("hide");

  Japan.classList.add("notAction");
  Thailand1.classList.add("notAction");
  Thailand2.classList.add("action");
  England.classList.add("notAction");
}

function action3(){
  const information = document.querySelector(".England .information")
  information.classList.remove("hide");
  const tip = document.querySelector(".England .tip")
  tip.classList.remove("hide");

  Japan.classList.add("notAction");
  Thailand1.classList.add("notAction");
  Thailand2.classList.add("notAction");
  England.classList.add("action");
}

function actionR(){
  const information = document.querySelector(".Japan .information") 
  information.classList.add("hide");
  const tip = document.querySelector(".Japan .tip")
  tip.classList.add("hide");

  Japan.classList.remove("action");
  Thailand1.classList.remove("notAction");
  Thailand2.classList.remove("notAction");
  England.classList.remove("notAction");
}

function actionR1(){
  const information = document.querySelector(".Thailand1 .information")
  information.classList.add("hide");
  const tip = document.querySelector(".Thailand1 .tip")
  tip.classList.add("hide");

  Japan.classList.remove("notAction");
  Thailand1.classList.remove("action");
  Thailand2.classList.remove("notAction");
  England.classList.remove("notAction");
}

function actionR2(){
  const information = document.querySelector(".Thailand2 .information")
  information.classList.add("hide");
  const tip = document.querySelector(".Thailand2 .tip")
  tip.classList.add("hide");

  Japan.classList.remove("notAction");
  Thailand1.classList.remove("notAction");
  Thailand2.classList.remove("action");
  England.classList.remove("notAction");
}

function actionR3(){
  const information = document.querySelector(".England .information")
  information.classList.add("hide");
  const tip = document.querySelector(".England .tip")
  tip.classList.add("hide");

  Japan.classList.remove("notAction");
  Thailand1.classList.remove("notAction");
  Thailand2.classList.remove("notAction");
  England.classList.remove("action");
}

Japan.addEventListener("mouseover", action);
Japan.addEventListener("mouseleave", actionR);

Thailand1.addEventListener("mouseover", action1);
Thailand1.addEventListener("mouseleave", actionR1);

Thailand2.addEventListener("mouseover", action2);
Thailand2.addEventListener("mouseleave", actionR2);

England.addEventListener("mouseover", action3);
England.addEventListener("mouseleave", actionR3);
