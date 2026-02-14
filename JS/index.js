const parentElement = document.body;
const footerElement = document.createElement ("footer");
parentElement.appendChild (footerElement);

let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector ("footer");
let copyright = document.createElement ("p");
copyright.innerHTML = "\u00A9 Manuel Guerrero Jr. " + thisYear;
footer.appendChild (copyright);
footer.style.textAlign = "center";

// -- skills --

const skills = ["Javascript", "HTML", "CSS", "Git", "Github", "Linux bash", "Python"];
let skillsSection = document.getElementById ("Skills");
let skillsList = skillsSection.querySelector ("ul");

for (let i=0; i<skills.length; i++) {
    const skill = document.createElement ("li");
    skill.innerText = skills[i];
    skillsList.appendChild (skill);
}
