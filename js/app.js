window.obtenerSaldo = () => {
    let numeroBip = document.getElementById('numeroBip').value;
    let urlApiBip = 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + numeroBip;
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
                          <th scope="row">N° Tarjeta</th>
                          <td>${data.id}</td>
                        </tr>
                        <tr>
                            <th scope="row">Saldo Bip</th>
                            <td>${data.saldoTarjeta}</td>
                          </tr>
                          <tr>
                              <th scope="row">Fecha Saldo</th>
                              <td>${data.fechaSaldo}</td>
                            </tr>
                        <tr>
                          <th scope="row">Estado Contrato</th>
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