import { RegistrarCampos } from "./promesas.js";

document.getElementById("formulario").addEventListener("submit", async (event) => {
  event.preventDefault(); //este evento no deja que se manden los datos si es que los campos estan vacios

  //aqui se declaran variables que obtengan los elementos y los valores de los datos ingresados
  
  let vPais = document.getElementById("pais").value;
  let vNombre = document.getElementById("nombre").value;
  let vApellido = document.getElementById("apellido").value;
  let vCorreo = document.getElementById("correo").value;
  let vCorreoSeguridad = document.getElementById("correo_sec").value;
  let vTelefono = document.getElementById("telefono").value;
  let vPreferencia1 = document.getElementById("preferencia").checked;
  let vPreferencia2 = document.getElementById("preferencia_2").checked;
  let vEleccion1 = document.getElementById("opcion_1").value;
  let vEleccion2 = document.getElementById("opcion_2").value;
  let vEleccion3 = document.getElementById("opcion_3").value;
  let vAreaRecomendacion = document.getElementById("area_texto").value;

  let objeto_campos = {
    pais: vPais,
    nombre: vNombre,
    apellido: vApellido,
    correo: vCorreo,
    correo_sec: vCorreoSeguridad,
    telefono: vTelefono,
    preferencia: vPreferencia1,
    preferencia_2: vPreferencia2,
    opcion_1: vEleccion1,
    opcion_2: vEleccion2,
    opcion_3: vEleccion3,
    area_texto: vAreaRecomendacion,
  };

  try {
    await RegistrarCampos(objeto_campos);
    alert("Se registraron bien los datos de contacto");
  } catch (error) {
    console.error("Error al registrar los datos de contacto: ", error);
    alert("Ha ocurrido un error al registrar los datos de contacto");
  }
});

//metodo para cambiar el contraste
document.getElementById("btnColor").addEventListener("click", () => {
    document.body.classList.toggle("modo-obscuro");
  });
  
  //metodo para cambiar el tamaño de letra
  document.getElementById("btnPorte").addEventListener("click", () => {
    document.body.classList.toggle("porte-letra");
  });