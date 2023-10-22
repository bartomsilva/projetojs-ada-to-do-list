let ID = require('./database/id')

const createID = () => {
  const passwordLength = -4

  let password = ('t00' + ID).slice(passwordLength)
  ID++

  return password
}

module.exports = createID
