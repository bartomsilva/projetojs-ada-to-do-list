const tasks = require("./database/tasks");

const existID = (idTask) => {
  const posTask = tasks.findIndex((task) => task.id == idTask);

  return posTask
}


module.exports = existID