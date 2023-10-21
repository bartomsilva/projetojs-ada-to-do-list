const tasks = require("./database/tasks");

const getTask = (idTask) => {
  const response = tasks.filter((task) => task.id === idTask);

  if(response.length === 0){
    console.log('Task não encontrada')
    return undefined
  }

  return response;
};

module.exports = getTask;
