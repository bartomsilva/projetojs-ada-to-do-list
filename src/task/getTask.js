const tasks = require("../database/tasks");

const getTask = (idTask) => {
  const response = tasks.filter((task) => task.id === idTask);

  if(response.length === 0){
    return 'Task não encontrada'
  }

  return response;
};

module.exports = getTask;
