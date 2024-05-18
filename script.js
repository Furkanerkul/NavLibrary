let count = 0;
let items = document.querySelectorAll('body nav ul li')


document.querySelector('#bar').addEventListener('click', function () {
    count++;
    if (count == 1) {
        this.className = 'fa-solid fa-xmark'
        document.querySelector('.hamburgerMenu').style.visibility = 'visible'
        document.querySelector('.hamburgerMenu').style.height = '25vh'
    }

    if (count == 2) {
        this.className = 'fa-solid fa-bars'
        document.querySelector('.hamburgerMenu').style.visibility = 'hidden'
        document.querySelector('.hamburgerMenu').style.height = '0vh'
        count = 0;
    }
})

for(let i = 0; i < document.querySelector('body nav ul').children.length; i++) {
    document.querySelector('.hamburgerMenu').insertAdjacentHTML('beforeend', `<div>${items[i].textContent}</div>`)
}