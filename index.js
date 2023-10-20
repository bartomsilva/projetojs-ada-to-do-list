const addTask = require("./addTask")
const deleteTask = require("./deleteTask")
const editTask = require("./editTask")
const getTask = require("./getTask")
const listTasks = require("./listTasks")

const prompt = require('prompt-sync')()

const menu = () => {
    console.log(`
    +-----------------------------------+
    |\t   GERENCIADOR DE TAREFAS:  \t|
    |\tADICIONAR TAREFA:..........1\t|
    |\tEDITAR TAREFA:.............2\t|
    |\tREMOVER TAREFA:............3\t|
    |\tLISTAR TAREFAS:............4\t|
    |\tLISTAR POR ID TAREFA:......5\t|
    |\tSAIR:......................0\t|
    +-----------------------------------+
    `);
}

while (true) {
    menu();
    let option = prompt("--> Escolha uma operação: ")
    
    if(option == 1){
        addTask({id: "t001",date: "15/01/2023", time: "10:00",desc: "teste 1"})
        console.log("Tarefa adicionada com sucesso!")
    }

    else if(option == 2){
        let id = prompt("Digite o id da tarefa que deseja editar: ")
        let desc = prompt("Digite a nova descrição da tarefa: ")
        let status = prompt("Digite o novo status da tarefa: ")
        editTask(id,{desc: desc, status:status})
        console.log("Tarefa editada com sucesso!")
    }

    else if(option == 3){
        let id = prompt("Digite o id da tarefa que deseja remover: ")
        deleteTask(id)
        console.log("Tarefa removida com sucesso!")
    }

    else if(option == 4){
        listTasks()
    }

    else if(option == 5){
        let id = prompt("Digite o id da tarefa que deseja consultar: ")
        console.log(getTask(id))
    }

    else if(option == 0){
        break;
    }

    else{
        console.log("ERRO: OPERAÇÃO INVÁLIDA");
    }
}