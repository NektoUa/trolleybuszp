let a = [['3trol.jpg', 'Схема маршруту № 3'], ['14trol.jpg', 'Схема маршруту № 14']];
let arrA = 0;
let k = 0;

function makeMin() {
    for (let i = 0; i < a.length; i++) {
        let imag = document.createElement('img');
        imag.classList.add("img-12-min");
        if (i == arrA) {
            imag.classList.add("active-img");
        }
        imag.src = './images/maps/' + a[i][0];
        imag.alt = a[i][1];
        document.querySelector('div-12-wrapper').appendChild(imag);
    }
}

function removE(event) {
    return document.querySelector('img[alt="' + a[arrA][1] + '"]').classList.remove('active-img');
}

function inHTML(arrA, event) {
    document.querySelector('img[alt="' + a[arrA][1] + '"]').classList.add('active-img');
    document.querySelector('.img-12-text').innerHTML = a[arrA][1];
    let imge = './images/maps/' + a[arrA][0];
    document.querySelector('.img-12-max').attributes[0]['textContent'] = imge;
}

function touchImg(event) {
    removE();
    let imge = './images/maps/';
    let wrap = event.srcElement;
    let wA = wrap.attributes[1].nodeValue
    for (let i = 0; i < a.length; i++) {
        if (wA == imge + a[i][0]) {
            arrA = i;
        }
    }
    inHTML(arrA);
}

function nextImg(event) {
    removE();
    arrA++;
    if (arrA == (a.length)) {
        arrA = 0;
    }
    inHTML(arrA);
}

function prevImg(event) {
    if (arrA == 0) {
        removE();
        arrA = a.length - 1;
    } else {
        removE();
        arrA--;
    }
    inHTML(arrA);
}

function resetImg() {
    removE();
    arrA = 0;
    document.querySelector('img[alt="' + a[arrA][1] + '"]').classList.add('active-img');
    document.querySelector('.img-12-text').innerHTML = a[arrA][1];
}

makeMin();
document.querySelector('div-12-wrapper').addEventListener('click', touchImg);


