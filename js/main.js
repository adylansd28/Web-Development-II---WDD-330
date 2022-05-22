let taskList = document.querySelector(".task-list");

let links = [

    {
      label: "Week1 notes",
      url: "Week1/index.html"
    },

    {
        label: "Week2 notes",
        url: "Week2/index.html"
    },

    {
        label: "Week3 notes",
        url: "Week3/index.html"
    },

    {
        label: "Week4 notes",
        url: "Week4/index.html"
    },

    {
        label: "Week5 notes",
        url: "Week5/index.html"
    }

];

for (let pairLabelLink of links){
    
    let classLiName = pairLabelLink["label"].replace(" ", "-");
    let newLiElement = document.createElement("li");
    newLiElement.setAttribute("class", classLiName);
    taskList.appendChild(newLiElement);

    let linkClassName = classLiName + "-link";
    let newAElement = document.createElement("a");
    newAElement.setAttribute("class", linkClassName);
    newAElement.setAttribute("href", pairLabelLink["url"]);
    newAElement.textContent = pairLabelLink["label"];

    newLiElement.appendChild(newAElement);
};