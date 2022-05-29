const taskList = document.querySelector(".task-list");
const addNewTaskBtn = document.querySelector(".new-task-btn");
const taskLeftDiv = document.querySelector(".task-left-div");

let numTotalTask = 1;

function addNewTaskFunc (){
    let addNewTaskName = document.querySelector(".new-task-name").value;
    let newLiElement = document.createElement("li");
    newLiElement.setAttribute("class","task-" + numTotalTask);

    let newMarkDoneBtn = document.createElement("input");
    newMarkDoneBtn.setAttribute("type","button");
    newMarkDoneBtn.setAttribute("value","*");
    newLiElement.appendChild(newMarkDoneBtn);

    let newPElement = document.createElement("p");
    newPElement.textContent = addNewTaskName;
    newLiElement.appendChild(newPElement);

    let newXBtn = document.createElement("input");
    newXBtn.setAttribute("type","button");
    newXBtn.setAttribute("value","X");
    newXBtn.setAttribute("class","X-btn");
    newXBtn.setAttribute("onclick","delTask(this)");
    newLiElement.appendChild(newXBtn);

    numTotalTask = numTotalTask + 1;
    taskList.insertBefore(newLiElement, taskLeftDiv);

};

function delTask (element) {
    let firstParent = element.parentNode
    let secondParent = firstParent.parentNode
    secondParent.removeChild(firstParent);
};

addNewTaskBtn.addEventListener("click", addNewTaskFunc);