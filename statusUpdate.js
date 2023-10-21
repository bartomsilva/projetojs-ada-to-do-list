const tasks = require("./database/tasks");
const statusBd = require('./database/status.db')

const changeStatus = (num, idTask) => {
    const posTask = tasks.findIndex((task) => task.id === idTask);
  
  if(posTask === -1) {
    console.log(`ID "${idTask}" inválido`)
    return false
  }

    switch (num) {
        case 0:
            tasks[posTask].status = statusBd.statusOpen();
            break;
        case 1:
            tasks[posTask].status = statusBd.statusPaused();
            break;
        case 2:
            tasks[posTask].status = statusBd.statusCancel();
            break;
        case 3:
            tasks[posTask].status = statusBd.statusFinalized();
            break;
        default:
            break;
    }
}

module.exports = changeStatus;