const accContainer = document.querySelector('.header__popup-container')
const accLink = document.querySelectorAll('.header__top-link')[2]
const popup = document.querySelector('.header__popup')

// accLink.addEventListener('click', (e) => {
//     e.preventDefault()


// })



document.body.addEventListener('click', (e) => {
    e.target == accLink && e.preventDefault()

    if (e.target !== popup && !popup.contains(e.target) && !accLink.contains(e.target)) {
        popup.classList.add('hidden')
        console.log()
    }
    else if (e.target !== accLink) {
        popup.classList.remove('hidden')
    }

})