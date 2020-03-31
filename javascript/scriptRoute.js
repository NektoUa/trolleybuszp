let trolley = {
    "t3": [['4-й Південний', 0.0, 20.8], ['Супермаркет', 0.3, 20.3], ['На вимогу', 0.8, -1], ['вул. Водограйна', 1.1, 19.7], ['вул. Автозаводська', 1.6, 19.1], ['Дитяча залізниця', -1, 18.4], ['Вокзал Запоріжя-1', 2.9, 17.8], ['ЗАЗ', 3.5, 17.4], ['Автовокзал', 4.0, 16.9], ['вул. Базарна', 4.9, 16.0], ['Театр ім. Магара', 5.2, 15.4], ['майдан Університетський', 5.9, 14.8], ['Редакція Газети "Запорізька Січ"', 6.6, 14.3], ['Обласна бібліотека', 7.1, 13.8], ['майдан Пушкіна', 7.7, 13.1], ['вул. Гагаріна', 9.0, 11.7], ['пл. Фестивальна', 9.7, 11.2], ['ТЦ Україна', 10.3, 10.5], ['вул. Сталеварів', 10.8, 9.9], ['вул. Миру', 11.3, 9.6], ['бул. Шевченка', 11.9, 9.1], ['пл. ім. Поляка', 12.3, 8.7], ['пр. Металургів', 13.1, 8.0], ['К/З ім. Глінки', 13.4, 7.5], ['Площа Запорізька', 13.7, 7.1], ['ДніпроГЕС', 16.2, 4.7], ['Запоріжкран', 17.0, -1], ['Дніпровське шосе', 17.7, -1], ['Півколо', 18.1, 2.6], ['вул. Михайлова', -1, 2.8], ['Магазин Інтерком', -1, 3.5], ['Універмаг Правобережний', -1, 3.9], ['БК "ЗТЗ"', 18.5, 2.2], ['Прохідна "ЗТЗ"', 18.9, 1.8], ['Аптека', 19.3, 1.5], ['Кільце "ЗТЗ"', 19.6, 1.1], ['Прохідна "ЗВА"', 20.2, 0.3], ['вул. Піщана', 20.7, 0.0],],
    "t14": [["Сімферопольське шосе", 0.0, 16.2], ["вул. Східна", 0.3, -1], ["Лікарня", 0.6, 15.7], ["вул. Чумаченка", 1.1, 15.3], ["Гімназія №6", 1.4, 15.0], ["вул. Європейська", 1.9, 14.5], ["вул. Висотна", 2.4, 14.0], ["Інститут ім. гетьмана П.Сагайдачного", 2.9, 13.4], ["На вимогу", 3.3, 13.1], ["вул. О. Говорухи", 3.7, 12.6], ["вул. Радіо", 4.3, 12.1], ["вул. Оранжерейна", 5.0, 11.4], ["Школа №70", 5.5, 10.9], ["Автовокзал", 6.9, 9.5], ["вул. Базарна", 7, 8, 8, 5], ["Театр ім. Магара", 8.1, 7.9], ["майдан Університетський", 8.8, 7.4], ["Редакція газети Запорізька Січ", 9.5, 6.9], ["Обласна бібліотека", 10.0, 6.5], ["майдан Пушкіна", 10.6, 5.6], ["вул. Гагаріна", 12.0, 4.3], ["пл. Фестивальна", 12.6, 3.8], ["ТЦ Україна", 13.2, 3.1], ["вул. Сталеварів", 13.7, 2.5], ["вул. Миру", 14.1, 2.2], ["бул. Шевченка", 14.7, 1.7], ["вул. Паріотична", 15.0, 1.2], ["вул. Перемоги", 15.4, 0.9], ["бул.Гвардейський", 15.9, 0.3], ["Набережна", 16.3, 0.0]],
}
function form() {
    let myForm = document.querySelector('.myForm');
    for (let i = 0; i < myForm.tr.length; i++) {
        myForm.tr[i].addEventListener("click", selectRoute);
    }
}
form();

let stopts = document.querySelector('.stopts');

function selectRoute(e) {
    let route = e.target.value;
    for (let key in trolley) {
        if (route == key) {
            stopts.innerHTML = null;
            selectStop('first-find-stop', route);
            selectStop('second-find-stop', route);
            selectButton();
        }
    }
}

function selectButton() {
    let newSelect = document.createElement('button');
    newSelect.textContent = 'Натисніть';
    newSelect.setAttribute('class', 'butStop');
    stopts.append(newSelect);
    document.querySelector('.butStop').onclick = stopRoute;
}

function selectStop(selectOption, key) {
    let newSelect = document.createElement('select');
    newSelect.setAttribute('id', selectOption);
    stopts.append(newSelect);
    let trollStop = document.getElementById(selectOption);
    for (let i = 0; i < trolley[key].length; i++) {
        for (let k = 0; k < trolley[key][i].length; k++) {
            if (k == 0) {
                let newOption = document.createElement('option');
                newOption.innerHTML = trolley[key][i][0];
                newOption.setAttribute('value', trolley[key][i][0]);
                trollStop.append(newOption);
            }
        }
    }
}

let outInfo = document.querySelector('.outInfo');

function ending(sum) {
    if (sum - 1 == 1 || sum - 1 == 21) st = "ка";
    else if (sum - 1 > 1 && sum - 1 < 5 || sum - 1 >= 22 && sum - 1 <= 24) st = "ки";
    else if (sum > 4) st = "ок";
    return st;
}

function stopRoute() {
    let firstBusStop = document.getElementById('first-find-stop').value;
    let secondBusStop = document.getElementById('second-find-stop').value;
    let start = 0;
    let end = 0;
    let sum = 0;
    let startKm = 0;
    let endKm = 0;
    let sumKm = 0;
    let out = '';

    for (let key in trolley) {
        for (let b = 0; b < trolley[key].length; b++) {
            let trollFirst = trolley[key][b];
            if (firstBusStop == trollFirst[0]) {
                for (let v = 0; v < trolley[key].length; v++) {
                    let trollSecond = trolley[key][v];
                    if (secondBusStop == trollSecond[0]) {
                        start = b;
                        end = v;
                        if (start > end) {
                            startKm = trollFirst[2];
                            endKm = trollSecond[2];
                        } else if (end > start) {
                            startKm = trollFirst[1];
                            endKm = trollSecond[1];
                        }
                        sum = Math.abs(start - end);
                        sumKm = Math.floor((endKm - startKm) * 100) / 100;
                        if (start != -1 && end !== -1 && start != end && start != end - 1 && end != start - 1 && startKm != -1 && endKm !== -1) {
                            ending(sum);
                            out = `Вам треба проїхати: ${sum - 1} зупин${st}  <br>Відстань дорівнює: ${sumKm} км<br> ${firstBusStop} - ${secondBusStop}`;
                        } else if (start == end) {
                            out = 'Вибрана та ж зупинка';
                        } else if (sum - 1 == 0) {
                            out = `Вам необхідно вийти на наступній зупинці <br>Відстань дорівнює: ${sumKm} км`;
                        } else {
                            out = 'В цьому напрямку троллейбус не зупиняється на цій зупинці. Виберіть будь ласка іншу.';
                        }
                    }
                }
            }
        }
    }
    outInfo.innerHTML = out
}
