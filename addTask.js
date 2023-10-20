const tasks = require("./database/tasks");
const createID = require('./createId')

const addTask = (task) => {
  const id = createID()
  const newTask = {
    id,
    ...task,
    created_at: new Date(),
    updated_at: new Date()
  };
  tasks.push(newTask);
};

module.exports = addTask;

