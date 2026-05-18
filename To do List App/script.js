const input=document.getElementById("taskInput");
const btn=document.getElementById("addBtn");
const list=document.getElementById("taskList");

console.log("JS Connected");

btn.addEventListener("click", ()=>{
    let taskText=input.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li=document.createElement("li");


    let span = document.createElement("span");
    span.innerText = taskText;

    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="❌";

    deleteBtn.addEventListener("click", ()=>{
        li.remove();
    })

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value="";
    
});