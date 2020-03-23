document.querySelector('#enviar').addEventListener('click', () =>{

    let numero = document.querySelector('#minumero').value;
    let mensaje = document.querySelector('#mimensaje').value;

    document.querySelector('#mostar').innerHTML = numero + ' ' + mensaje;

    let api = 'https://api.whatsapp.com/send?phone=';
    let datos = `${api}57${numero}&text=*${mensaje}*`;
    window.open(datos);
});