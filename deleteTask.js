const tasks = require('./database/tasks')

const deleteTask = (idTask) => {
  const posTask = tasks.findIndex((task) => task.id === idTask)

  if (posTask === -1) {
    console.log(`ID "${idTask}" inválido`)
    return false
  }

  tasks.splice(posTask, 1)

  return true
}
module.exports = deleteTask
