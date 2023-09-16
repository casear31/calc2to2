const firstDate = document.getElementById("date-first")
const secondDate = document.getElementById("date-second")
const diapasonBegin = document.getElementById("start-diapason")
const diapasonEnd = document.getElementById("finish-diapason")
const calculateScheduleBtn = document.getElementById("calculate-schedule")
const forma = document.getElementById("forma")





console.log(firstDate,secondDate, diapasonBegin, diapasonEnd , calculateScheduleBtn, diapasonBegin.value, diapasonEnd.value , new Date(diapasonBegin.value) - new Date(diapasonEnd.value) / 86400000 )

//var rangeBetween
//calculateScheduleBtn.addEventListener('submit', () => {
forma.addEventListener('submit', () => {

    //console.log(diapasonBegin.value.isValid(), diapasonEnd.value.isValid())
    alert(diapasonBegin.value.isValid())

    let rangeStart =  new Date(diapasonBegin.value)
    let rangeFinish = new Date(diapasonEnd.value)

    let rangeBetween = rangeFinish - rangeStart
    //console.log(rangeStart, rangeFinish, rangeBetween)

})

//console.log(rangeBetween)

// headerCityButton.addEventListener('click', () => {
//     const city = prompt('Укажите Ваш город');
//     headerCityButton.textContent = city;
//     localStorage.setItem('lomoda-location', city);
// })


