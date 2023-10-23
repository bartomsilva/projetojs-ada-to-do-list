const validateTime = (hour) => {
  const [hour, minutes] = hour.split(':')

  if (hour < 0 || hour > 23) {
    return false
  }

  if (minutes < 0 || minutes > 59) {
    return false
  }

  return true
}

module.exports = validateTime
