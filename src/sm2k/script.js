function calculateFromDate(date) {
  date1 = new Date(date)
  date2 = new Date()
  diffTime = Math.abs(date2 - date1)
  diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays
}

document.getElementById('date').innerHTML = '<font color="f9cd3f">' + calculateFromDate('8/30/2000') + '</font>'
