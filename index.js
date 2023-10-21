const addTask = require("./addTask")
const deleteTask = require("./deleteTask")
const editTask = require("./editTask")
const getTask = require("./getTask")
const listTasks = require("./listTasks")
const changeStatus = require('./statusUpdate')

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

        addTask({ date: date, time: time, desc: desc });
        console.log("Tarefa adicionada com sucesso!");
    }

    else if (option == 2) {
        let id = prompt("Digite o id da tarefa que deseja editar: ");
        let desc = prompt("Digite a nova descrição da tarefa: ");
        let status = prompt("Digite o novo status da tarefa: ");
        editTask(id, { desc: desc, status: status });
        console.log("Tarefa editada com sucesso!");
    }

    else if (option == 3) {
        let newId = prompt("Digite o id da tarefa: ");
        console.log(`
        +--------------------------------------+
        |\t ESCOLHA O STATUS DA TAREFA \t|
        |\tABERTA.....................1\t|
        |\tPAUSADA....................2\t|
        |\tCANCELADA..................3\t|
        |\tFINALIZADA.................4\t|
        +--------------------------------------+
        `);
        let newStatus = prompt("--> ");
        changeStatus(newStatus, newId) == false ? console.log("Não foi possível atualizar o status") : console.log("Status atualizado com sucesso!!");

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
        console.log(getTask(id))
    }

    else if (option == 0) {
        break;
    }

    else {
        console.log("ERRO: OPERAÇÃO INVÁLIDA");
    }
}