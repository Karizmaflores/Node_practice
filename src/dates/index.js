// import moment here; use this package in each function
const moment = require('moment')

const today = () => {
  // write code for dates.today
  return moment().format('dddd')
  // console.log('Today is', day)
}

const calendar = () => {
  // write code for dates.calendar
  // return moment().format('month','day',",",'year')
  return moment().format('MMMM DD, YYYY');
}


const currentTime = () => {
  // write code for dates.currentTime
  return moment().format('hh:mm:ss A');
}

module.exports = {
  today,
  calendar,
  currentTime
}