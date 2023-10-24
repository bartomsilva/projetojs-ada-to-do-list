let ID = require('../database/id')

const createID = () => {

  let password = 't00' + ID
  ID++

  return password
}

module.exports = createID
