import { db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

export const RegistrarCampos = async (objeto_campos) => {
  //esto se puede decir que es validar?
    try {
    const docRef = await addDoc(collection(db, "campos_contacto"), objeto_campos);
    console.log("Ingreso correcto de campos: ", docRef.id);
  } catch (error) {
    console.error("Hubo un error con los campos ", error);
  }
};
