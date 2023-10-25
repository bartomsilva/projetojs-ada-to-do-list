const tasks = require("../database/tasks");

const listTasks = () => {
  if (tasks.length === 0) {
    return false;
  }

  tasks
    .sort((d1, d2) => convertDate(d2.date) - convertDate(d1.date))
    .forEach((task) => {
      console.log(`
        id: ${task.id} - Status: ${task.status}
        data: ${task.date} - hora: ${task.time}
        Descrição: ${task.desc}
      `);
    });

    return true;
};

module.exports = listTasks;


function convertDate(dateString) {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
}