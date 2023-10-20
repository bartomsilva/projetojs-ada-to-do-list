const createID = () => {
  const characters =
    '!@#$&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const passwordLength = 5
  let password = 't'

  while (password.length < passwordLength) {
    let position = Math.floor(Math.random() * characters.length)
    password += characters[position]
  }

  return password
}

module.exports = createID
