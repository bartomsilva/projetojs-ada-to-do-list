const tasks = require("./database/tasks");

const editTask = (idTask, updateTask) => {
  const posTask = tasks.findIndex((task) => task.id === idTask);
  tasks[posTask].date = updateTask.date ?? tasks[posTask].date;
  tasks[posTask].time = updateTask.time ?? tasks[posTask].time;
  tasks[posTask].desc = updateTask.desc ?? tasks[posTask].desc;
  tasks[posTask].status = updateTask.status ?? tasks[posTask].status;
  tasks[posTask].updated_ad = new Date().toLocaleDateString("pt-br")
};

module.exports = editTask;
