const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
        
function addTask(){          
        if (taskInput !== '') {
            const li = document.createElement('li');
            li.innerHTML = taskInput.value.trim();
            taskList.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            }
            taskInput.value = '';
        }
    
    taskList.addEventListener('click', function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
           
        }else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
        }, false);
        function saveData(){
            localStorage.setItem("data", taskList.innerHTML);
        }
        function showTask(){
            taskList.innerHTML = localStorage.getItem("data");
        }
        showTask()