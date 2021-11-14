let a = [['3trol.jpg', 'Схема маршруту № 3'], ['14trol.jpg', 'Схема маршруту № 14']];
let ZERO = 0;
let k = 0;

function makeMin() {
    a.forEach(elem => {
        let imag = document.createElement('img');
        imag.classList.add("img-12-min");
        if (elem == ZERO) imag.classList.add("active-img");
        imag.src = './images/maps/' + elem[0];
        imag.alt = elem[1];
        document.querySelector('div-12-wrapper').appendChild(imag);
    }
    )
}

function removE(event) {
    return document.querySelector(`img[alt="${a[ZERO][1]}"]`).classList.remove('active-img');
}

function inHTML(ZERO, event) {
    document.querySelector(`img[alt="${a[ZERO][1]}"]`).classList.add('active-img');
    document.querySelector('.img-12-text').innerHTML = a[ZERO][1];
    let imge = './images/maps/' + a[ZERO][0];
    document.querySelector('.img-12-max').attributes[0]['textContent'] = imge;
}

function touchImg(event) {
    removE();
    let imge = './images/maps/';
    let wrap = event.srcElement;
    let wA = wrap.attributes[1].nodeValue
    for (let i in a) {
        if (wA == imge + a[i][0]) {
            ZERO = i;
        }
    }
    inHTML(ZERO);
}

function nextImg(event) {
    removE();
    ZERO++;
    if (ZERO === (a.length)) {
        ZERO = 0;
    }
    inHTML(ZERO);
}

function prevImg(event) {
    if (ZERO == 0) {
        removE();
        ZERO = a.length - 1;
    } else {
        removE();
        ZERO--;
    }
    inHTML(ZERO);
}

function resetImg() {
    removE();
    ZERO = 0;
    document.querySelector(`img[alt="${a[ZERO][1]}"]`).classList.add('active-img');
    document.querySelector('.img-12-text').innerHTML = a[ZERO][1];
}

makeMin();
document.querySelector('div-12-wrapper').addEventListener('click', touchImg);
