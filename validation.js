const validateDate = (date) => {
  const [dia, mes, ano] = date.split('/')
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!regex.test(date) 
  || (dia < 1 || dia > 31)
  || (mes < 1 || mes > 12)){
    console.log(`data ${date} inválida!`);
    return false;
  }
  return true
}

const validateTime = (time) => {
  const [hour, minutes] = time.split(':')
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!regex.test(time)
    || (hour < 0 || hour > 23)
    || (minutes < 0 || minutes > 59)  ) {
    console.log(`hora ${time} inválida!`);
    return false;
  }
  return true
}

module.exports = { validateDate, validateTime }
