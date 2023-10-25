const tasks = require("../database/tasks");

const getTask = (idTask) => {
  const response = tasks.filter((task) => task.id === idTask);
  return response;
};

module.exports = getTask;
