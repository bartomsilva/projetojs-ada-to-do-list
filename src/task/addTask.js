const tasks = require("../database/tasks");
const statusBd = require('../functions/status')
const createID = require("../functions/createId");
const { validateTime, validateDate } = require("../functions/validation");


const addTask = (task) => {
  // validação dos dados de entrada
  
  // validar data
  if(!validateDate(task.date)){
    console.log(`Data "${task.date}" inválida!`);
    return false;
  }
  // validar hora
  if(!validateTime(task.time)){
    console.log(`Hora "${task.time}" inválida!`);
    return false;
  }

  // validar descrição
  if (typeof task.desc != "string" || task.desc.length<1){
    console.log("Descrição inválida!")
    return false
  }

  const id = createID();
  // const id = 1;  // id para teste

  const newTask = {
    id,
    ...task,
    created_at: new Date(),
    updated_at: new Date(),
    status: statusBd.statusOpen()
  };
  tasks.push(newTask);
  return true
};

module.exports = addTask;
