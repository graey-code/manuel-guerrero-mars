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

// -- message submission --

const messageForm = document.querySelector ('form[name="leave_message"]');

messageForm.addEventListener ("submit", function (event) {

    event.preventDefault ();

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;
    
    
    console.log ("Name: " + userName);
    console.log ("Email: " + userEmail);
    console.log ("Message: " + userMessage);

    // -- display messages in list --

    const messageSection = document.getElementById ("Messages");
    const messageList = messageSection.querySelector ("ul");
    const newMessage = document.createElement ("li");
    newMessage.innerHTML = `<a href ="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`;

    // -- create a remove button -- 

    const removeButton = document.createElement ("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.className = "remButton";

    removeButton.addEventListener ("click", function (event){
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild (removeButton);

    messageList.appendChild (newMessage);

    messageForm.reset ();
});

// -- lesson 13 code --


fetch ("https://api.github.com/users/graey-code/repos")
    // .then((response) => {
    //     if (!response.ok) {
    //         throw new Error ("Failed to fetch data. Sorry for the inconvenience. :(");
    //     }
    //     return response.json;
    // })
    .then (function (response) {
        return response.json();
    }) 
    .then ((repositories) => {
        console.log ("Repositories: ", repositories);

        const projectSection = document.getElementById ("Projects");
        const projectList = projectSection.querySelector ("ul");

        for (i = 0; i < repositories.length; i++) {
            const project = document.createElement ("li");
            project.innerText = repositories[i].name;
            projectList.appendChild (project);
        }
    })
    .catch ((error) => {
        console.error ("Error with fetching repositories", error);
    });

