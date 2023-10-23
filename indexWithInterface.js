const addTask = require("./addTask")
const deleteTask = require("./deleteTask")
const editTask = require("./editTask")
const getTask = require("./getTask")
const listTasks = require("./listTasks")
const changeStatus = require('./statusUpdate')
const existID = require('./existID')

const prompt = require('prompt-sync')()

const menu = () => {
    console.log(`
    +-----------------------------------+
    |\t   GERENCIADOR DE TAREFAS:  \t|
    |\tADICIONAR TAREFA:..........1\t|
    |\tEDITAR TAREFA:.............2\t|
    |\tEDITAR STATUS DA TAREFA:...3\t|
    |\tREMOVER TAREFA:............4\t|
    |\tLISTAR TAREFAS:............5\t|
    |\tLISTAR POR ID TAREFA:......6\t|
    |\tSAIR:......................0\t|
    +-----------------------------------+
    `);
}

while (true) {
    menu();
    let option = prompt("--> Escolha uma operação: ")

    if (option == 1) {
        date = prompt('Digite a data de execução da tarefa (dd/mm/aaaa): ');
        time = prompt('Digite a hora que a tarefa será executada (hh:mm): ');
        desc = prompt('Digite a descrição da tarefa: ');

        if (addTask({ date: date, time: time, desc: desc })){
            console.log("Tarefa adicionada com sucesso!");
        } else {
            console.log("ocorreu um erro na inclusão")
        }
    }

    else if (option == 2) {
        let id = prompt("Digite o id da tarefa que deseja editar: ");
        if(!existID(id)){
            console.log(`\nID "${id}" inválido`)
            continue
        }

        console.log(`
        +-----------------------------------------------+
        |\t       O QUE VOCÊ QUER EDITAR        \t|
        +                                               +
        |\t[0] DATA [1] HORÁRIO [2] DESCRIÇÃO:\t|
        +-----------------------------------------------+
        `);
        let editOption = prompt("--> ");
        let editedTask = {};
        if (editOption == 0) {
            let date = prompt("Digite a nova data da tarefa: ");
            editedTask = { date: date };
        }
        else if(editOption == 1){
            let time = prompt("Digite o novo horário da tarefa: ");
            editedTask = { time: time };
        }
        else if(editOption == 2){
            let desc = prompt("Digite a nova descrição da tarefa: ");
            editedTask = { desc: desc };
        }
        else{
            console.log("ERRO: OPÇÃO INVÁLIDA");
            continue;
        }

        if(editTask(id, editedTask)){
            console.log("Tarefa editada com sucesso!");
        } else {
            console.log("ocorreu um erro na atualização")
        }
    }

    else if (option == 3) {
        let newId = prompt("Digite o id da tarefa: ");
        console.log(`
        +---------------------------------------+
        |\t ESCOLHA O STATUS DA TAREFA \t|
        |\tABERTA.....................0\t|
        |\tPAUSADA....................1\t|
        |\tCANCELADA..................2\t|
        |\tFINALIZADA.................3\t|
        +---------------------------------------+
        `);
        let newStatus = prompt("--> ");
        console.log(+newStatus)
        changeStatus(+newStatus, newId) == false ? console.log("Não foi possível atualizar o status") : console.log("Status atualizado com sucesso!!");

    }

    else if (option == 4) {
        let id = prompt("Digite o id da tarefa que deseja remover: ")
        deleteTask(id) == false ? console.log('Não foi possível remover!') : console.log("Tarefa removida com sucesso!")
    }

    else if (option == 5) {
        listTasks()
    }

    else if (option == 6) {
        let id = prompt("Digite o id da tarefa que deseja consultar: ")
        let returnedTask = getTask(id)
        console.log(returnedTask)
    }

    else if (option == 0) {
        break;
    }

    else {
        console.log("ERRO: OPERAÇÃO INVÁLIDA");
    }
}