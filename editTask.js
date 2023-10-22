const tasks = require("./database/tasks");
const changeStatus = require("./statusUpdate");

const editTask = (idTask, updateTask) => {
  // validar data
  if (updateTask.date) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(updateTask.date)) {
      console.log(`data ${updateTask.date} inválida!`);
      return false;
    }
  }
  // validar hora
  if (updateTask.time) {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!regex.test(updateTask.time)) {
      console.log(`hora ${updateTask.time} inválida!`);
      return false;
    }
  }
  // validar descrição
  if (updateTask.desc) {
    if (typeof updateTask.desc != "string" || updateTask.desc.length < 1) {
      console.log("descrição inválida!");
      return false;
    }
  }
  
  const posTask = tasks.findIndex((task) => task.id == idTask);

  if (posTask === -1) {
    console.log(`ID "${idTask}" inválido`);
    return false;
  }

  tasks[posTask].date = updateTask.date ?? tasks[posTask].date;
  tasks[posTask].time = updateTask.time ?? tasks[posTask].time;
  tasks[posTask].desc = updateTask.desc ?? tasks[posTask].desc;
  tasks[posTask].updated_ad = new Date().toLocaleDateString("pt-br")
};

module.exports = editTask;
