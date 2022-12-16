// assign value for date of birth

const todayDate = new Date()
const birthDay = new Date(2022,11,24)

// Calculate how many days 
// until the value of the birthDate 

const timeMilli = birthDay - todayDate
const days = (timeMilli / 86400000)
const daysInt = Math.floor(days)

// Calculate how many days since
// your birthday

const birthDayGone = new Date(2021,11,24)
const timeMilliGone = todayDate - birthDayGone
const daysGone = (timeMilliGone / 86400000)
const daysGoneInt = Math.floor(daysGone)

// Display this information to the user

console.log(`Congratulations on your upcoming birthday in only ${daysInt} days time!
It's hard to believe it was ${daysGoneInt} days ago :) `)








