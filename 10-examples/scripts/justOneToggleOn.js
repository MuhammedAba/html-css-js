
/*
First Method
let buttonGaming = document.querySelector('.btn-gaming-toggle')
let buttonMusic = document.querySelector('.btn-music-toggle')
let buttonTech = document.querySelector('.btn-tech-toggle')

console.log(buttonGaming.innerText)
function justOne(text) {
    if (text === buttonGaming.innerText) {
        if (!buttonGaming.classList.contains('is-toggled')) {
            buttonGaming.classList.add('is-toggled')
            buttonMusic.classList.remove('is-toggled');
            buttonTech.classList.remove('is-toggled');
        } else {
            buttonGaming.classList.remove('is-toggled');
        }
    }
    if (text === buttonMusic.innerText) {
        if (!buttonMusic.classList.contains('is-toggled')) {
            buttonMusic.classList.add('is-toggled')
            buttonTech.classList.remove('is-toggled');
            buttonGaming.classList.remove('is-toggled');
        } else {
            buttonMusic.classList.remove('is-toggled');
        }
    }
    if (text === buttonTech.innerText) {
        if (!buttonTech.classList.contains('is-toggled')) {
            buttonTech.classList.add('is-toggled')
            buttonMusic.classList.remove('is-toggled');
            buttonGaming.classList.remove('is-toggled');
        } else {
            buttonTech.classList.remove('is-toggled');
        }
    }
}
*/
//Second Method
function toggle(selector) {
    const button = document.querySelector(selector)
    console.log(button)
    if (!button.classList.contains('is-toggled')) {
         removePreviousButton()
        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }
}
function removePreviousButton() {
    const button = document.querySelector('.is-toggled');
    if (button) {
        button.classList.remove('is-toggled');
    }
}