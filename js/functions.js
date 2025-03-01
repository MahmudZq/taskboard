function dateTime (){
    const day = document.getElementById('day');
    const date = document.getElementById('date');

    const todayDay = new Date().toLocaleDateString( 'en-us', {weekday: 'short'});
    day.innerText = todayDay;
    const todayDate = new Date().toLocaleDateString( 'en-us', { year:'numeric', month:'long', day:'numeric'})
    date.innerText = todayDate;

    const deadlines = document.querySelectorAll('.deadline');
    for(let i=0; i < deadlines.length; i++){
    const deadline = deadlines[i];
    const lastDate = new Date();
    lastDate.setDate(lastDate.getDate() + (2*i) + 1 + i);
    const deadlineDate = lastDate.toLocaleDateString( 'en-GB', {
        year:  "numeric",
        month: "long",
        day: "numeric"
    });
    deadline.innerText = deadlineDate;
    }
}

function truncateText(text) {
    let truncatedText;
    if(text.length > 70){

        truncatedText = text.slice(0, 70) + "..."
    }
    else{
        truncatedText = text;
    }
    return truncatedText;
} 
function showModal(id) {
    document.getElementById(id).classList.remove("hidden"); 
    document.getElementById(id).classList.add("flex"); 
}
function hideModal(id) {
const assignedTaskCount = document.getElementById('taskAssigned');
const value = parseInt(assignedTaskCount.innerText);
document.getElementById(id).classList.add("hidden"); 
document.getElementById(id).classList.remove("flex"); 
if(value === 0){
    showModal('congrats-modal');
}
}
function hideCongratModal(id){
    document.getElementById(id).classList.add("hidden");
}
function completed(title,btn){
    showModal('board-update-modal');
    const assignedTaskCount = document.getElementById('taskAssigned');
    const value = parseInt(assignedTaskCount.innerText) - 1;
    let newCount = value < 10 ? '0' + value : value;
    assignedTaskCount.innerText = newCount;

    const taskDone = document.getElementById('taskDone');
    let doneCount = parseInt(taskDone.innerText) + 1;
    doneCount = doneCount < 10 ? '0' + doneCount : doneCount;
    taskDone.innerText = doneCount;

    const actLog = document.getElementById('activityLog');
    const titleText = document.getElementById(title).innerText;
    const button = document.getElementById(btn);
    button.disabled = true;
    button.classList.add("bg-[#888888]");
    button.classList.remove("hover:bg-black")
    const logData = document.createElement('div');
    const time = new Date().toLocaleTimeString('en-US', { hour12: true });
    logData.innerHTML=  `   <p class="text-base text-gray-700 py-4 px-3 bg-blue-100 rounded-lg">
                                You have Completed the task <span class="font-semibold">${titleText}</span>
                                at <span class="font-semibold text-gray-600">${time}</span>.
                            </p>
                        `
    actLog.appendChild(logData);
    showModal('board-update-modal');

}
function clearHistory(){
    const actLog = document.getElementById('activityLog');
    actLog.innerHTML= "";

    const cardButtons = document.querySelectorAll(".clearLog");
    for(let i=0; i<cardButtons.length; i++){
    const buttonCl = cardButtons[i];
    buttonCl.disabled = false;
    buttonCl.classList.remove("bg-[#888888]");
    buttonCl.classList.add("hover:bg-black");
    }
    const assignedTaskCount = document.getElementById('taskAssigned');
    assignedTaskCount.innerText = '06';
    const taskDone = document.getElementById('taskDone');
    taskDone.innerText = '23';
}
function getRandomLightColor() {
    const r = Math.floor(Math.random() * 156) + 100; 
    const g = Math.floor(Math.random() * 156) + 100; 
    const b = Math.floor(Math.random() * 156) + 100; 
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomLightColor();
}