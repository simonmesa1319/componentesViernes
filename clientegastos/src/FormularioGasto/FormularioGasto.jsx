export function FormularioGasto(){
    return(
        <>
       <section className="container">
       <div className="row my-5">
        <div className="col-12 col-md-8">
            <h3>Registro de cliente:</h3>
            <hr />
            <form className="p-5 border rounded">


                <div class="input-group mb-3">
                <span class="input-group-text">
                <i class="bi bi-person-circle"></i>
                </span>
                <input type="text" class="form-control" placeholder="Nombre"/>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text">
                <i class="bi bi-cake2"></i>
                </span>
                <input type="text" class="form-control" placeholder="Edad"/>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text">
                <i class="bi bi-telephone"></i>
                </span>
                <input type="text" class="form-control" placeholder="Telefono"/>
                </div>

                
                <div class="input-group mb-3">
                <span class="input-group-text">
                <i class="bi bi-envelope-paper-fill"></i>
                </span>
                <input type="text" class="form-control" placeholder="Correo"/>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text">
                <i class="bi bi-key-fill"></i>
                </span>
                <input type="text" class="form-control" placeholder="Contraseña"/>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text">
                <i class="bi bi-calendar-check"></i>
                </span>
                <input type="text" class="form-control" placeholder="FechaRegistro"/>
                </div>

                
                <div class="input-group mb-3">
                <span class="input-group-text">
                <i class="bi bi-rocket-takeoff"></i> 
                </span>
                <input type="text" class="form-control" placeholder="Ciudad"/>
                </div>

                <button className="btn btn-outline-primary w-100">Registrar</button>



            </form>
        </div>
       </div>
       </section>
        </>
    );
}
export default FormularioGasto;