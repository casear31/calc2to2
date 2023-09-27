
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
    let scheduleOut = document.getElementById("schedule-out")
    let tbodyOut = document.getElementById("tbody-out")
    
    // scheduleOut.innerHTML = ""

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
    let countWeeks = (endOfWeek - startOfWeek + 86400000) / weekLong
    console.log(countWeeks)
    // for (let i = 0; i < countWeeks; i= i+1) {
    //     tbodyOut.innerHTML += "<tr><td>Выходной</td><td>Выходной</td><td>Выходной</td><td>Выходной</td><td>Выходной</td><td>Выходной</td><td>Выходной</td></tr>"
    // }
    tbodyOut.innerHTML = "";

    let cycleWeekStart = startOfWeekDay - 86400000;
    for (let i = 0; i < countWeeks; i = i + 1) {
        
        //let cycleWeekend = cycleWeekStart + (7 * 86400000)
        // tbodyOut.innerHTML += `<tr class="rowOfTable" id="rowId${i}"></tr>`;
        let tableRow = tbodyOut.appendChild(document.createElement("tr"))//.setAttribute("id", `#rowId${i}`);
        tableRow.setAttribute("id", `rowId${i}`)
        console.log(tableRow)
        let cycleWeekday = cycleWeekStart;

        for (let j = 1; j < 8; j = j + 1){
            cycleWeekday = cycleWeekday + 86400000;
            
            let cycleWeekdayDate = new Date(cycleWeekday);

            console.log(days[cycleWeekdayDate.getDay()])
            // document.getElementById(`rowId${i}`).appendChild(document.createElement("td")).innerText = "yuhuuuu"
            let tableCell = tableRow.appendChild(document.createElement("td"))
            tableCell.setAttribute("id", `cellId${cycleWeekday}`)
            tableCell.style.color = "#000"
            document.querySelector(`#cellId${cycleWeekday}`).innerHTML = `${cycleWeekdayDate.toLocaleDateString('ru-RU') }` + "</br>" + `<span  id="dayoffId${cycleWeekday}">Выходной</span>`
            // let tr = document.querySelector(`rowId${i}`).id //.appendChild("td").innerText = "yuhuuuu";
            console.log(document.querySelector(`#cellId${cycleWeekday}`))
            // console.log(tr)
            if (j == 7) {
                cycleWeekStart = cycleWeekday
            }


        }

    }


    let rangeBetween = (rangeFinish - rangeStart) 
    
    forTest.innerHTML = "Дней в выбранном диапазоне: " + (rangeBetween / 86400000)
    //forTest.innerHTML += new Date(rangeBetween).toISOString().subStr(0,10) + </br>

    for (let i = firstDateOfShift; i <= endOfWeek; i = i + (86400000 * 4)) {
        
        let secondShift = i + 86400000
        if (i >= rangeStart || secondShift >= rangeStart) {
            let firstSh = new Date(i)
            let secondSh = new Date(secondShift)
            frstCell = document.querySelector(`#cellId${i}`)
            scndCell = document.querySelector(`#cellId${secondShift}`)
            frstCell.style.backgroundColor = "rgb(192, 2, 12)";
            scndCell.style.backgroundColor = "rgb(192, 2, 12)";
            frstCell.style.color = "#fff";
            scndCell.style.color = "#fff";


            frstCellWorkDay = document.querySelector(`#dayoffId${i}`)
            scndCellWorkDay = document.querySelector(`#dayoffId${secondShift}`)
            frstCellWorkDay.innerHTML = '1-й рабочий'
            scndCellWorkDay.innerHTML = '2-й рабочий'
            // scheduleOut.innerHTML += firstSh.toLocaleDateString('ru-RU') +  "  -  " + days[firstSh.getDay()] + "</br>"
            // scheduleOut.innerHTML += secondSh.toLocaleDateString('ru-RU') +  "  -  " + days[secondSh.getDay()] + "</br>"
            // tbodyOut.innerHTML += firstSh.toLocaleDateString('ru-RU') +  "  -  " + days[firstSh.getDay()] + "</br>"
            // tbodyOut.innerHTML += secondSh.toLocaleDateString('ru-RU') +  "  -  " + days[secondSh.getDay()] + "</br>"
            //console.log(new Date(i).toISOString(), new Date(secondShift).toISOString())
        }
        }

    console.log(rangeStart, rangeFinish, rangeBetween)

    scheduleOut.style.visibility = "visible";

})






//console.log(rangeBetween)

// headerCityButton.addEventListener('click', () => {
//     const city = prompt('Укажите Ваш город');
//     headerCityButton.textContent = city;
//     localStorage.setItem('lomoda-location', city);
// })


