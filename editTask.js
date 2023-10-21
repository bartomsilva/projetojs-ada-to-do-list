const tasks = require("./database/tasks");
const changeStatus = require("./statusUpdate");

const editTask = (idTask, updateTask) => {
  const posTask = tasks.findIndex((task) => task.id == idTask);
  
  if(posTask === -1) {
    console.log(`ID "${idTask}" inválido`)
    return false
  }

  if(updateTask == undefined) {
    return false
  }

  tasks[posTask].date = updateTask.date ?? tasks[posTask].date;
  tasks[posTask].time = updateTask.time ?? tasks[posTask].time;
  tasks[posTask].desc = updateTask.desc ?? tasks[posTask].desc;
  tasks[posTask].updated_ad = new Date().toLocaleDateString("pt-br")
};

module.exports = editTask;
