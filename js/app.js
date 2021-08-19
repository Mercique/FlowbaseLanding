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