const checkboxes = document.querySelectorAll('.ticket-checkbox')
const total = document.querySelector('.cart__total')

checkboxes.forEach(checkbox => {
    const icon = checkbox.nextElementSibling
    checkbox.checked ? icon.src = '../img/ticket-filled.svg' : icon.src = '../img/ticket-empty.svg'
    checkbox.addEventListener('click', () => {
        checkbox.checked ? icon.src = '../img/ticket-filled.svg' : icon.src = '../img/ticket-empty.svg'
    })
})