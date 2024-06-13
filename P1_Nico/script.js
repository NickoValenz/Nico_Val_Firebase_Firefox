import { RegistrarCampos, obtenerCampos, eliminarCampos } from "./promesas.js";
//obtiene los elementos por el id y sus valores
document.getElementById("formulario").addEventListener("submit", async (event) => {
  event.preventDefault();

  let ePais = document.getElementById("pais");
  let vPais = ePais.value;

  let eNombre = document.getElementById("nombre");
  let vNombre = eNombre.value;

  let eApellido = document.getElementById("apellido");
  let vApellido = eApellido.value;

  let eCorreo = document.getElementById("correo");
  let vCorreo = eCorreo.value;

  let eCorreoSeguridad = document.getElementById("correo_sec");
  let vCorreoSeguridad = eCorreoSeguridad.value;

  let eTelefono = document.getElementById("telefono");
  let vTelefono = eTelefono.value;

  let ePreferencia1 = document.getElementById("preferencia");
  let vPreferencia1 = ePreferencia1.checked;

  let ePreferencia2 = document.getElementById("preferencia_2");
  let vPreferencia2 = ePreferencia2.checked;

  let eSeleccionGusto = document.getElementById("seleccion_gusto");
  let vSeleccionGusto = eSeleccionGusto.value;

  let eAreaRecomendacion = document.getElementById("area_texto");
  let vAreaRecomendacion = eAreaRecomendacion.value;

  let objeto_campos = {
    pais: vPais,
    nombre: vNombre,
    apellido: vApellido,
    correo: vCorreo,
    correo_sec: vCorreoSeguridad,
    telefono: vTelefono,
    preferencia: vPreferencia1,
    preferencia_2: vPreferencia2,
    seleccion_gusto: vSeleccionGusto,
    area_texto: vAreaRecomendacion,
  };
//esto se considera validar?
  try {
    await RegistrarCampos(objeto_campos);
    alert("Se registraron bien los datos de contacto");
    document.getElementById("formulario").reset();
    cargarDatos(); //esto como que refresca los datos despues de registrar para ver si hay errores
  } catch (error) {
    console.error("Error al registrar los datos de contacto: ", error);
    alert("Ha ocurrido un error al registrar los datos de contacto");
  }
});

//con la estructura es como se cargan los datos ya registrados a la tabla en el html
const cargarDatos=()=>{
  obtenerCampos()
    .then((objetos_campos)=>{
      let estructura = "";
      objetos_campos.forEach((p) => {
        estructura += "<tr>";
        estructura += "<td>" + p.pais + "</td>";
        estructura += "<td>" + p.nombre + "</td>";
        estructura += "<td>" + p.apellido + "</td>";
        estructura += "<td>" + p.correo + "</td>";
        estructura += "<td>" + p.telefono + "</td>";
        estructura += "<td>" + (p.preferencia ? "Modo Claro" : "") + (p.preferencia_2 ? ", Modo Obscuro" : "") + "</td>";
        estructura += "<td>" + p.seleccion_gusto + "</td>";
        estructura += "<td>" + p.area_texto + "</td>";
        estructura += "<td><button id='DEL" + p.id + "'>Eliminar</button></td>";
        estructura += "</tr>";
      });
      document.getElementById("cuerpoTabla").innerHTML = estructura;

      //con esto se le pone la funcionlidad al boton de eliminar y una confirmacion para hacerlo o no
      objetos_campos.forEach((p)=>{
        let btnEliminar = document.getElementById("DEL" + p.id);
        btnEliminar.addEventListener("click", () => {
          if (confirm("Desea eliminar a:\n" + p.nombre + " " + p.apellido)) {
            eliminarCampos(p.id)
              .then(() => {
                alert("Eliminaste con exito");
                cargarDatos(); 
              })
              .catch((error) =>{
                console.log(error);
              });
          } else {
            console.log("Cancelaste la eliminacion");
          }
        });
      });
    })
    .catch((error) =>{
      console.log("Error al cargar datos:", error);
    });
};

//metodo para cambiar el contraste
document.getElementById("btnColor").addEventListener("click", () =>{
  document.body.classList.toggle("modo-obscuro");
});

//metodo para cambiar el tamaño de letra
document.getElementById("btnPorte").addEventListener("click", () =>{
  document.body.classList.toggle("porte-letra");
});

//carga los datos mientras se va carganado la pagina ya que load es en teoria solo para cuando ya esta full cargada
document.addEventListener("DOMContentLoaded", () =>{
  cargarDatos();
});
