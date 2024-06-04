'use strict'

const dayContent = document.querySelector('.day')
const monthContent = document.querySelector('.month')
const dateContent = document.querySelector('.date')
const yearContent = document.querySelector('.year')
const hourContent = document.querySelector('.hours')
const minContent = document.querySelector('.minutes')
const secContent = document.querySelector('.seconds')
const sup = document.querySelector('sup')



function activeTime
    () {
    const timeZone = new Date;

    let day = timeZone.getDay();
    let month = timeZone.getMonth();
    let date = timeZone.getDate();
    let yrs = timeZone.getFullYear();
    let hrs = timeZone.getHours();
    let min = timeZone.getMinutes();
    let sec = timeZone.getSeconds();

    // dayContent.textContent = day;
    // monthContent.textContent = month;
    dateContent.textContent = date;
    yearContent.textContent = yrs;
    hourContent.textContent = hrs;
    minContent.textContent = min;
    secContent.textContent = sec;


    console.log(day, month, date, yrs, hrs, min, sec);

    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

    const monthOfYear = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    console.log(day);

    dayContent.textContent = dayOfWeek[day]
    monthContent.textContent = monthOfYear[month]

    if (sec < 10) {
        let zero = ['0']
        secContent.textContent = zero[0] + sec;
    }

    if (min < 10) {
        let zero = ['0']
        minContent.textContent = zero[0] + min
    }

    if (hrs > 12) {
        let hour = hrs - 12;
        hourContent.textContent = '0' + hour;
        sup.textContent = 'PM'
    } else if (hrs < 12) {
        sup.textContent = 'AM'
    }

    if (hrs < 10) {
        let zero = ['0']
        hourContent.textContent = zero[0] + hrs;
        console.log(hourContent.textContent);
    }

}

activeTime()

setInterval((function () {
    activeTime()
}), 1000)


