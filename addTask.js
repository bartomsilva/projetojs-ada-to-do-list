const tasks = require("./database/tasks");
const createID = require("./createId");
const statusBd = require('./database/status.db')
const { validateTime, validateDate } = require("./validation");


const addTask = (task) => {
  // validação dos dados de entrada
  
  // validar data
  if(!validateDate(task.date)){
    console.log(`Data ${task.date} inválida!`);
    return false;
  }
  // validar hora
  if(!validateTime(task.time)){
    console.log(`Hora "${task.date}" inválida!`);
    return false;
  }

  // validar descrição
  if (typeof task.desc != "string" || task.desc.length<1){
    console.log("descrição inválida!")
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
