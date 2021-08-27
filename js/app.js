function swap(value) {
    var c1 = document.getElementById('review1')
    var c2 = document.getElementById('review2')
    var c3 = document.getElementById('review3')
    if (value == '1') {
        c1.style.display = 'none'
        c2.style.display = 'block'
        c3.style.display = 'none'
    }
    if (value == '2') {
        c1.style.display = 'block'
        c2.style.display = 'none'
        c3.style.display = 'none'
    }
    if (value == '3') {
        c1.style.display = 'none'
        c2.style.display = 'none'
        c3.style.display = 'block'
    }
}

function swapPicture(value) {
    var picture = document.getElementById('img')
    if (value == '1') {
        picture.setAttribute('src', '../img/product1.png')
    } else if (value == '2') {
        picture.setAttribute('src', '../img/radio2-big.png')
    } else if (value == '3') {
        picture.setAttribute('src', '../img/radio3-big.png')
    } else if (value == '4') {
        picture.setAttribute('src', '../img/radio4-big.png')
    } else if (value == '5') {
        picture.setAttribute('src', '../img/radio5-big.png')
    } else if (value == '6') {
        picture.setAttribute('src', '../img/radio6-big.png')
    } else if (value == '7') {
        picture.setAttribute('src', '../img/radio7-big.png')
    }
}