let tasks;
let cont = 0;
let contDone = 0;
tasks = [
    {
        id: 0,
        task: "Tarea 1",
        done: true
    },

    {
        id: 1,
        task: "Tarea 2",
        done: true
    },

    {
        id: 2,
        task: "Tarea 3",
        done: true
    }
];

maxValue=Math.max(...tasks.map(x=>parseInt(x.id)))
// Filtra el objeto tal que los valores sean igual al máximo
result=tasks.filter(x=>x.tasks==maxValue)
// Imprime el resultado
console.log(result)

console.log(tasks.length);

const AddTask = () => {
    const txt = document.getElementById('txtNewTask').value;
    
    if (txt != ''){
        
        let newTask = {id: tasks.length + 1, task: txt, done: false};
        tasks.push(newTask);
        document.getElementById('txtNewTask').value = '';
        document.getElementById('txtNewTask').focus;
    }
}   

const LoadInfo = () => {
    const txt = document.getElementById('txtNewTask').value;
    const elemento = document.getElementById('listTasks');
    
    if (txt != ''){
        let newTask = {id: tasks.length, task: txt, done: false};
        tasks.push(newTask);
        document.getElementById('txtNewTask').value = '';
        document.getElementById('txtNewTask').focus;

        cont = tasks.length;
    }

    let doc = `<div class="list_tasks">
                    <div class="item1">ID</div>
                    <div class="item2">Tarea</div>
                    <div class="item3">Acciones</div>
                </div>`;

    if (cont >= 0){
        for (let i = 0; i < tasks.length; i++){
            doc += `<div id="${tasks[i].id}" class="list_tasks">
                        <div class="item1">
                        ${tasks[i].id} 
                        </div>
                        <div class="item2">
                        ${tasks[i].task}
                        </div>
                        <div class="item3">`
                        if (tasks[i].done === true){
                            doc += `<input type="checkbox" id="cbox" value="check" checked />`
                            contDone ++;
                        }
                        else{
                            doc += `<input type="checkbox" id="cbox" value="check" /> <span class="pin"> X </span>`
                        }
                        doc += `</div>
                    </div>`
        }

        console.log(tasks);
        document.getElementById('viewTotal').innerHTML = cont;
        document.getElementById('viewDone').innerText = contDone;
        elemento.innerHTML = doc;
    
    }

    function MaxValue(){
        maxValue=Math.max(...tasks.map(x=>parseInt(x.id)));
        // Filtra el objeto tal que los valores sean igual al máximo
        result=tasks.filter(x=>x.tasks==maxValue);
        return result + 1;
    }

}

document.getElementById('btnAdd').addEventListener('click',AddTask);


