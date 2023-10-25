const tasks = require("../database/tasks");
const statusBd = require('../functions/status');
const existID = require('../functions/existID');

const changeStatus = (idStatus, idTask) => {
    // const posTask = tasks.findIndex((task) => task.id == idTask);
    const posTask = existID(idTask)

    if (posTask === -1) {
        console.log(`ID "${idTask}" inválido`)
        return false
    }

    switch (idStatus) {
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
            return false;
    }
}

module.exports = changeStatus;