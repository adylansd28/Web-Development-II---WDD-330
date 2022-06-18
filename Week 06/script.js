const taskList = document.querySelector(".task-list");
const addNewTaskBtn = document.querySelector(".new-task-btn");
const taskLeftDiv = document.querySelector(".task-left-div");
const taskLeftSpan = document.querySelector(".task-left-span");

let allBtn = document.querySelector(".btn-all");
let activeBtn = document.querySelector(".btn-act");
let completedBtn = document.querySelector(".btn-com");

let allActiveCompleted = "all";
let allCounterTask = 0;
let markDoneCounter = 0;
let activeCounter = 0;

let numTotalTask = 1;

function initializeBtns() {
    allBtn.setAttribute("onclick", "selectCounter(this)");
    activeBtn.setAttribute("onclick", "selectCounter(this)");
    completedBtn.setAttribute("onclick", "selectCounter(this)");
};

function addNewTaskFunc (){
    let addNewTaskName = document.querySelector(".new-task-name").value;
    let newLiElement = document.createElement("li");
    newLiElement.setAttribute("id","task-" + numTotalTask);
    newLiElement.setAttribute("class","task");

    let newMarkDoneBtn = document.createElement("input");
    newMarkDoneBtn.setAttribute("type","button");
    newMarkDoneBtn.setAttribute("value"," ");
    newMarkDoneBtn.setAttribute("onclick","markDone(this)");
    newLiElement.appendChild(newMarkDoneBtn);

    let newPElement = document.createElement("p");
    newPElement.setAttribute("id","undone-task-" + numTotalTask);
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

    allCounterTask ++;
    countAllActiveCompleted()

};

function delTask (element) {
    let firstParent = element.parentNode
    let secondParent = firstParent.parentNode
    secondParent.removeChild(firstParent);
    
    markDoneCounter --;
    activeCounter --;

    if (element.getAttribute("value") == " ") {
        activeCounter --;
    } else if (element.getAttribute("value") == "*") {
        markDoneCounter --;
    };

    allCounterTask --;

    countAllActiveCompleted()
};

function markDone(element) {
    if (element.getAttribute("value") == " ") {
        element.removeAttribute("class")
        element.setAttribute("class", "mark-done");
        element.setAttribute("value", "*");
        let centerDiv = element.parentNode.querySelector(":nth-child(2)");
        centerDiv.removeAttribute("class");
        centerDiv.setAttribute("class", "mark-done-task-");
        markDoneCounter ++;
    } else if (element.getAttribute("value") == "*") {
        element.removeAttribute("class")
        element.setAttribute("class", "undone");
        element.setAttribute("value", " ");
        let centerDiv = element.parentNode.querySelector(":nth-child(2)");
        centerDiv.removeAttribute("class");
        centerDiv.setAttribute("class", "undone-task-");
        markDoneCounter --;
    };

    countAllActiveCompleted()
    
};

function countAllActiveCompleted() {

    if (allActiveCompleted == "all") {
        taskLeftSpan.textContent = allCounterTask.toString() + " ";
    } else if (allActiveCompleted == "active") {
        activeCounter = allCounterTask - markDoneCounter;
        taskLeftSpan.textContent = activeCounter.toString() + " ";
    } else if (allActiveCompleted == "completed") {
        taskLeftSpan.textContent = markDoneCounter.toString() + " ";
    }
};

function selectCounter(button) {
    if (button.className == "btn-all") {
        allActiveCompleted = "all";
    } else if (button.className == "btn-act") {
        allActiveCompleted = "active";
    } else if (button.className == "btn-com") {
        allActiveCompleted = "completed";
    };
    
    countAllActiveCompleted();
};

initializeBtns();
countAllActiveCompleted();
addNewTaskBtn.addEventListener("click", addNewTaskFunc);