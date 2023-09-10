const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('name')
    const cardName = document.getElementById('card-name')
    const errorName = name.nextElementSibling
    const cardNumber = document.getElementById('card-numbers')
    const number = document.getElementById('number')
    const errorNumber = number.nextElementSibling;
    const mounth = document.getElementById('mounth')
    const mounthCard = document.getElementById('card-month')
    const year = document.getElementById('year')
    const yearCard = document.getElementById('card-year')
    const errorDate = document.getElementById('error-date')
    const cvc = document.getElementById('cvc')
    const cvcCard = document.getElementById('card-cvc')
    const errorCvc = document.getElementById('error-cvc')
    if (name.value === '') {
        errorName.classList.remove('hide')
    } else {
        cardName.textContent = name.value
        errorName.classList.add('hide')
    }

    if (number.value === '') {
        errorNumber.classList.remove('hide');
    } else {
        errorNumber.classList.add('hide');
        const cleanedNumber = number.value.replace(/\s/g, '');
        const formattedNumber = cleanedNumber.match(/.{1,4}/g).join(' ');
        cardNumber.textContent = formattedNumber;
    }

    if (mounth.value === '') {
        errorDate.classList.remove('hide')
    } else if (mounth.value > 12 || mounth.value < 1) {
        errorDate.textContent = 'Please enter a valid month (1-12)';
        errorDate.classList.remove('hide');
    } else {
        errorDate.classList.add('hide');
        mounthCard.textContent = mounth.value;
    }
    

    if (year.value === '') {
        errorDate.classList.remove('hide')
    } else {
        yearCard.textContent = year.value
        errorDate.classList.add('hide')
    }

    if (cvc.value === '') {
        errorCvc.classList.remove('hide')
    } else {
        cvcCard.textContent = year.value
        errorCvc.classList.add('hide')
    }
});

function formatCardNumber(input) {
    const cleanedValue = input.value.replace(/[^0-9]/g, '');
    const formattedValue = cleanedValue.replace(/(\d{4}(?=\d))/g, '$1 ');
    input.value = formattedValue;
}


