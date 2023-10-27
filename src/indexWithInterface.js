const addTask = require("./task/addTask");
const deleteTask = require("./task/deleteTask");
const editTask = require("./task/editTask");
const getTask = require("./task/getTask");
const listTasks = require("./task/listTasks");
const changeStatus = require("./task/statusUpdate");
const existID = require("./functions/existID");

const prompt = require("prompt-sync")();

function menu () {
  console.clear();
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
};
let option=null
while (option!=0) {
  menu();
  option = prompt("--> Escolha uma operação: ");
  
  switch (+option) {
    case 1:
      createTask();
      break;
    case 2:
      updateTask();
      break;
    case 3:
      updateStatusTask();
      break;
    case 4:
      removeTask();
      break;
    case 5:
      if (!listTasks()) {
        console.log("Não há tarefas cadastradas!");
      }
      break;
    case 6:
      getTaskById();
      break;
    case 0:
      break;
    default:
      console.log("Opção inválida.");
  }

  if (option == 0) {
    break;
  }
  prompt("Pressione ENTER para continar")
}

//####//
function createTask() {
  const date = prompt("Digite a data de execução da tarefa (dd/mm/aaaa): ");
  const time = prompt("Digite a hora que a tarefa será executada (hh:mm): ");
  const desc = prompt("Digite a descrição da tarefa: ");

  if (addTask({ date: date, time: time, desc: desc })) {
    console.log("Tarefa adicionada com sucesso!");
  } else {
    console.log("Ocorreu um erro na inclusão da tarefa!");
  }
}

//####//
function updateTask() {
  const id = prompt("Digite o id da tarefa que deseja editar: ");
  if (existID(id) < 0) {
    console.log(`\nID "${id}" inválido!`);
    return;
  }

  console.log(`
    +-----------------------------------------------+
    |\t       O QUE VOCÊ QUER EDITAR        \t|
    +                                               +
    |\t[0] DATA [1] HORÁRIO [2] DESCRIÇÃO:\t|
    +-----------------------------------------------+
    `);
  const editOption = prompt("--> ");
  const editedTask = {};
  switch (editOption) {
    case 0:
      const date = prompt("Digite a nova data da tarefa: ");
      if (date == "") {
        console.log("ERRO: DATA INVÁLIDA!");
        return;
      }
      editedTask = { date: date };
      break;
    case 1:
      const time = prompt("Digite o novo horário da tarefa: ");
      if (time == "") {
        console.log("ERRO: HORÁRIO INVÁLIDO!");
        return;
      }
      editedTask = { time: time };
      break;
    case 2:
      const desc = prompt("Digite a nova descrição da tarefa: ");
      if (desc == "") {
        console.log("ERRO: DESCRIÇÃO INVÁLIDA!");
        return;
      }
      editedTask = { desc: desc };
      break;
    default:
      console.log("ERRO: OPÇÃO INVÁLIDA!");
  }

  if (editTask(id, editedTask)) {
    console.log("Tarefa editada com sucesso!");
  } else {
    console.log("Ocorreu um erro na atualização!");
  }
}

//####//
function updateStatusTask() {
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
  console.log(+newStatus);
  changeStatus(+newStatus, newId) == false
    ? console.log("Não foi possível atualizar o status!")
    : console.log("Status atualizado com sucesso!");
}

//####//
function removeTask() {
  const id = prompt("Digite o id da tarefa que deseja remover: ");
  if (!deleteTask(id)) {
    console.log("Não foi possível remover!");
  } else {
    console.log("Tarefa removida com sucesso!");
  }
}

//####//
function getTaskById() {
  const id = prompt("Digite o id da tarefa que deseja consultar: ");
  const returnedTask = getTask(id);
  if (returnedTask.length) {
    console.log(returnedTask);
  } else {
    console.log("Tarefa não localizada");
  }
}
