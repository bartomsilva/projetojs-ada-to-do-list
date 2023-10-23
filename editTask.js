const tasks = require("./database/tasks");
const changeStatus = require("./statusUpdate");
const { validateTime, validateDate } = require("./validation");

const editTask = (idTask, updateTask) => {
  // validar data
  if (updateTask.date) {   
    if(!validateDate(updateTask.date)){
      console.log(`Data "${updateTask.date}" inválida!`);
      return false;
    }
  }
  // validar hora
  if (updateTask.time) {
    if(!validateTime(updateTask.time)){
      console.log(`Hora "${updateTask.date}" inválida!`);
      return false;
    }
  }
  // validar descrição
  if (updateTask.desc) {
    if (typeof updateTask.desc != "string" || updateTask.desc.length < 1) {
      console.log("Descrição inválida!");
      return false;
    }
  }
  
  const posTask = tasks.findIndex((task) => task.id == idTask);

  if (posTask === -1) {
    console.log(`ID "${idTask}" inválido!`);
    return false;
  }

  tasks[posTask].date = updateTask.date ?? tasks[posTask].date;
  tasks[posTask].time = updateTask.time ?? tasks[posTask].time;
  tasks[posTask].desc = updateTask.desc ?? tasks[posTask].desc;
  tasks[posTask].updated_at = new Date().toLocaleDateString("pt-br");

  return true;
};

module.exports = editTask;
