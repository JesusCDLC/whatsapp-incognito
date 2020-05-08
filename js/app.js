document.querySelector('#submit').addEventListener('click', (event) =>{
    event.preventDefault()

    const buttonSubmit = document.querySelector('#submit');
    const urlDesktop = 'https://web.whatsapp.com/';
    const urlMobile = 'whatsapp://';

    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let prefijo = document.querySelector('#prefijo').value;
        let numero = document.querySelector('#minumero').value;
        let mensaje = document.querySelector('#mimensaje').value;

        let message = `send?phone=${prefijo}${numero}&text=${mensaje}`;


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);
});