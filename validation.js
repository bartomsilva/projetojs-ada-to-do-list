const validateDate = (date) => {
  let [dia, mes, ano] = date.split('/')
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  dia = parseInt(dia);
  mes = parseInt(mes) - 1; 
  ano = parseInt(ano);

  // data valida 
  // base para chegar se é uma data válida.
  const dataValida = new Date(ano, mes, dia);

  if (!regex.test(date) 
  || (dataValida.getDate() != dia)
  || (dataValida.getMonth() != mes)
  || (dataValida.getFullYear() != ano)){
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
    return false;
  }
  return true
}

module.exports = { validateDate, validateTime }
