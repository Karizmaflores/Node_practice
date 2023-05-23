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
  return moment().calendar('dddd');
}


const currentTime = () => {
  // write code for dates.currentTime

}

module.exports = {
  today,
  calendar,
  currentTime
}