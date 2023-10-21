const tasks = require("./database/tasks");
const createID = require('./createId')
const statusBd = require('./database/status.db')

const addTask = (task) => {
  const id = createID()
  // const id = 1;
  const newTask = {
    id,
    ...task,
    created_at: new Date(),
    updated_at: new Date(),
    status: statusBd.statusOpen()
  };
  tasks.push(newTask);
};

module.exports = addTask;

