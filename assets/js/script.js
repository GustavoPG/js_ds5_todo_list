let tasks;
let cont;
let contDone = 0;
tasks = [
    {
        id: 0,
        task: "Tarea 1",
        done: false
    },
    {
        id: 1,
        task: "Tarea 2",
        done: true
    },
    {
        id: 2,
        task: "Tarea 3",
        done: false
    }
];

const AddTask = () => {
    const txt = document.getElementById('txtNewTask').value;
    if (txt != ''){
        let newTask = {id: cont, task: txt, done: false};
        tasks.push(newTask);
        document.getElementById('txtNewTask').value = '';
        document.getElementById('txtNewTask').focus();
        cont += 1;
        LoadInfo();
    }
}   

const LoadInfo = () => {
    const txt = document.getElementById('txtNewTask').value;
    const elemento = document.getElementById('listTasks');
    contDone = 0;

    let doc = `<div class="list_tasks">
                    <div class="item1 title">ID</div>
                    <div class="item2 title">Tarea</div>
                    <div class="item3 title">Acciones</div>
                </div>`;

    if (tasks.length >= 0){
        for (let i = 0; i < tasks.length; i++){
            doc += `<div id="${tasks[i].id}" class="list_tasks">
                        <div class="item1">
                        ${tasks[i].id} 
                        </div>
                        <div class="item2">
                        ${tasks[i].task}
                        </div>
                        <div class="item3 action">`
                        if (tasks[i].done === true){
                            doc += `<input type="checkbox" id="a${tasks[i].id}" value="check" checked onclick="CheckDone(this.id)" class="form-check-input" /><span id="b${tasks[i].id}" class="pin icon" onclick="Delete(this.id)"> X </span>`
                            contDone ++;
                        }
                        else{
                            doc += `<input type="checkbox" id="a${tasks[i].id}" value="check" onclick="CheckDone(this.id)" class="form-check-input" /><span id="b${tasks[i].id}" class="pin icon" onclick="Delete(this.id)"> X </span>`
                        }
                        doc += `</div>
                    </div>`
        }
        document.getElementById('viewTotal').innerHTML = tasks.length;
        document.getElementById('viewDone').innerHTML = contDone;
        elemento.innerHTML = doc;
    }
}

const CheckDone = (id) =>{
    id = Number(id.replace('a','').replace('b',''));
    for (let i= 0; i < tasks.length; i++){
        if (tasks[i].id === id){
            if(tasks[i].done === true){
                tasks[i].done =  false;
            }else{
                tasks[i].done = true;
            }
        }
    }
    LoadInfo();
}

const Delete = (id) =>{
    id = Number(id.replace('a','').replace('b',''));
    for (let i= 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks.splice(i,1);
            LoadInfo();
        }
    }
}

const Load = () =>{
    cont = tasks.length;
    LoadInfo();
}

document.getElementById('btnAdd').addEventListener('click',AddTask);
window.addEventListener('load', Load);

//document.getElementsByClassName('delete').addEventListener('click', Delete(this.id));