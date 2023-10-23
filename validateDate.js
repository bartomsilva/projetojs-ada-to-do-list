const validateDate = (date) => {
  const [dia, mes, ano] = date.split('/')

  if (dia < 1 || dia > 31) {
    return false
  }

  if (mes < 1 || mes > 12) {
    return false
  }

  if (ano < 2023) {
    return false
  }

  return true
}

module.exports = validateDate
