window.obtenerSaldo = () => {
    let numeroBip = document.getElementById('numeroBip').value;
    let urlApiBip = 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + numeroBip;

    fetch(urlApiBip)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })


}