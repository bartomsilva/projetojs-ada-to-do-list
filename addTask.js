const tasks = require("./database/tasks");

const addTask = (task) => {
  const newTask = {
    ...task,
    created_at: new Date(),
    updated_at: new Date()
  };
  tasks.push(newTask);
};

module.exports = addTask;

