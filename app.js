// document.querySelector('#submit').addEventListener('click',function(){
    
//     let cliente = document.querySelector('#cliente').value;
//     let fecha = document.querySelector('#fecha').value;
//     let hora = document.querySelector('#hora').value;
//     let barbero = document.querySelector('#barbero').value;
//     let servicio = document.querySelector('#servicio').value;

//     let url = "https://api.whatsapp.com/send?phone=573105010573&text=*_Barberia Lider_*%0A*Reservas*%0A%0A*¿Cual es tu nombre?*%0A" + cliente + "%0A*Indica la fecha de tu reserva*%0A" + fecha + "%0A*Indica la hora de tu reserva*%0A" + hora + "%0A*Barbero de preferencia*%0A" + barbero + "%0A*¿Cual es el servicio que se desea realizar?*%0A" + servicio;
//     window.open(url);

// });
'https://api.whatsapp.com/send?phone=573022053008*probando%20aplicacion%20nueva%20whatsapp%20xD*'
document.querySelector('#enviar').addEventListener('click', () =>{

    let numero = document.querySelector('#minumero').value;
    let mensaje = document.querySelector('#mimensaje').value;

    document.querySelector('#mostar').innerHTML = numero + ' ' + mensaje;

    let api = 'https://api.whatsapp.com/send?phone=';
    let datos = `${api}57${numero}&text=*${mensaje}*`;
    window.open(datos);
});