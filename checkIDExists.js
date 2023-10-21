const checkIDExists = (idTask) => {
  const posTask = tasks.findIndex((task) => task.id === idTask)

  if(posTask === -1) {
    console.log(`ID "${idTask}" inválido`)
  }

  return posTask
}


module.exports = checkIDExists