const tasks = require("./database/tasks");

const deleteTask=(idTask)=> {
  const posTask = tasks.findIndex( task => task.id === idTask);
  tasks.splice(posTask,1)
}
module.exports = deleteTask;
