const tasks = require("./database/tasks");
const checkIDExists = require("./checkIDExists");

const deleteTask=(idTask)=> {
  const posTask = tasks.findIndex( task => task.id === idTask);
  const idTaskExists = checkIDExists(posTask)
    
  if(idTaskExists) {
    return false
  }

  tasks.splice(posTask,1)

  return true
}
module.exports = deleteTask;
