const addTask = require("./addTask")
const deleteTask = require("./deleteTask")
const editTask = require("./editTask")
const getTask = require("./getTask")
const listTasks = require("./listTasks")
const changeStatus = require('./statusUpdate')

addTask({date: "15/01/2023", time: "10:00",desc: "teste 1"})
// addTask({date: "16/09/2023", time: "11:00",desc: "teste 2"})
// addTask({date: "17/02/2023", time: "12:00",desc: "teste 3"})
// addTask({date: "18/10/2023", time: "13:00",desc: "teste 4"})

// console.log(getTask(1))
// console.log(editTask(1,{desc: "teste ###", status:"*"}))
// changeStatus(3, 1)
// console.log(getTask(1))

listTasks()

// deleteTask("t004")

// listTasks()

// console.log(getTask("t002"))