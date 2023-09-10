function formatarNumero(input) {
    let numero = input.value.replace(/\s/g, '');
    numero = numero.replace(/(\d{4})/g, '$1 ');
    input.value = numero;
}


document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault()
    const inputs = document.querySelectorAll('.input')
    inputs.forEach(input => {
        if (input.value === '' || isNaN(input.value)) {
            const errorElement = input.nextElementSibling
            if (errorElement) {
                errorElement.classList.remove('hide')
            } else {
                errorElement.classList.add('hide')
            }
        }
    })
})
