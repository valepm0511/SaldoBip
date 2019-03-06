window.onload = function () {
    setTimeout(() => {
        const containerPreloader = document.getElementById('contenedorCarga');
        contenedorCarga.style.visibility = 'hidden';
        contenedorCarga.style.opacity = '0';
      }, 2000);
}

window.obtenerSaldo = () => {
    let numeroBip = document.getElementById('numeroBip').value;
    let urlApiBip = '//bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + numeroBip;
    var infoBip = document.getElementById('infoBip');
    fetch(urlApiBip)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            infoBip.innerHTML = `
            <div class="col-12 bg-white rounded">
                  <table class="table table-sm ">
                     <tbody>
                        <tr>
                          <td scope="row">N° Tarjeta</td>
                          <td>${data.id}</td>
                        </tr>
                        <tr>
                            <td scope="row">Saldo Bip</td>
                            <td>${data.saldoTarjeta}</td>
                          </tr>
                          <tr>
                              <td scope="row">Fecha Saldo</td>
                              <td>${data.fechaSaldo}</td>
                            </tr>
                        <tr>
                          <td scope="row">Estado Contrato</td>
                          <td>${data.estadoContrato}</td>
                        </tr>
                      </tbody>
                    </table>
              </div>
           
            `
        })
        .catch(error => {
            console.error("No pudimos obtener respuesta");
            console.error("ERROR > " + error.stack);
        });
}