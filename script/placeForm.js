const form = document.getElementById('placement')
const checkboxes = form.querySelectorAll('.place-item')
const button = document.querySelector('.placement__form__submit');

function updateButtonState() {
    const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    button.disabled = !isAnyChecked;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateButtonState);
}); 