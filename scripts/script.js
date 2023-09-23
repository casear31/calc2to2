
const forma = document.getElementById("forma")
const forTest = document.getElementById("for-test")
const calculateScheduleBtn = document.getElementById("calculate-schedule")





//console.log(firstDate,secondDate, diapasonBegin, diapasonEnd , calculateScheduleBtn, diapasonBegin.value, diapasonEnd.value , new Date(diapasonBegin.value) - new Date(diapasonEnd.value) / 86400000 )

//var rangeBetween
calculateScheduleBtn.addEventListener('click', () => {
// forma.addEventListener('submit', () => {
    const firstDate = document.getElementById("date-first")
    // const secondDate = document.getElementById("date-second")
    const diapasonBegin = document.getElementById("start-diapason")
    const diapasonEnd = document.getElementById("finish-diapason")
    let scheduleOut  = document.getElementById("schedule-out")
    
    scheduleOut.innerHTML = ""

    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const weekLong = 7 * 86400000
        

    //console.log(diapasonBegin.value.isValid(), diapasonEnd.value.isValid())

    //console.log(1)
    //forTest.innerText("1")
    //forTest.innerHTML(diapasonBegin.value.isValid())

    
    let firstDateOfShift  = Date.parse(firstDate.value)
    // let secondDateOfShift  =  Date.parse(secondDate.value)

    let rangeStart =  Date.parse(diapasonBegin.value)
    let rangeFinish = Date.parse(diapasonEnd.value) + 86400000

    let startOfWeek;
    let endOfWeek;

    for (let i = rangeStart; i >= i - (weekLong); i = i - 86400000) {
        let curI = new Date(i)
        if (curI.getDay() == 1) {
            startOfWeek = i;
            break;
        }
    }

        for (let i = rangeFinish; i <= i + (weekLong); i = i + 86400000) {
        let curI = new Date(i)
        if (curI.getDay() == 0) {
            endOfWeek = i;
            break;
        }
    }

    let startOfWeekDay = new Date(startOfWeek);
    let endOfWeekDay = new Date(endOfWeek);

    console.log(weekLong / 86400000)
    console.log(startOfWeekDay.getDay())
    console.log(endOfWeekDay.getDay())


    console.log('weeks: ' + (endOfWeek - startOfWeek + 86400000) / weekLong)



    let rangeBetween = (rangeFinish - rangeStart) 
    
    forTest.innerHTML = "Дней в выбранном диапазоне: " + (rangeBetween / 86400000)
    //forTest.innerHTML += new Date(rangeBetween).toISOString().subStr(0,10) + </br>

    for (let i = firstDateOfShift; i <= endOfWeek; i = i + (86400000 * 4 )) {
        let secondShift = i + 86400000
        if (i >= rangeStart || secondShift >= rangeStart) {
            let firstSh = new Date(i)
            let secondSh = new Date(secondShift)
            scheduleOut.innerHTML += firstSh.toISOString().substr(0,10) + "  -  " + days[firstSh.getDay()] + "</br>"
            scheduleOut.innerHTML += secondSh.toISOString().substr(0,10) + "  -  " + days[secondSh.getDay()]  + "</br>"
            //console.log(new Date(i).toISOString(), new Date(secondShift).toISOString())
            }
        }

    console.log(rangeStart, rangeFinish, rangeBetween)

})






//console.log(rangeBetween)

// headerCityButton.addEventListener('click', () => {
//     const city = prompt('Укажите Ваш город');
//     headerCityButton.textContent = city;
//     localStorage.setItem('lomoda-location', city);
// })


