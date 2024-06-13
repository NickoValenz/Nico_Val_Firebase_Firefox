import {db} from "./firebase.js";
import {addDoc, collection, getDocs, deleteDoc, doc} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

export const RegistrarCampos = async (objeto_campos) => {
//esto se considera validar?
try{
    const docRef = await addDoc(collection(db, "campos_contacto"), objeto_campos);
    console.log("Ingreso correcto de campos: ", docRef.id);
  } catch (error) {
    console.error("Hubo un error con los campos ", error);
    throw error;
  }
};

export const obtenerCampos = async () => {
//esto se considera validar?
try{
    const qSnap = await getDocs(collection(db, "campos_contacto"));
    let objetos_campos = [];
    qSnap.forEach((doc) => {
      objetos_campos.push({ id: doc.id, ...doc.data() });
    });
    return objetos_campos;
  } catch (error) {
    console.error("Error al obtener los campos:", error);
    throw error;
  }
};

export const eliminarCampos = async (id) => {
  try{
    await deleteDoc(doc(db, "campos_contacto", id));
    console.log("Documento eliminado correctamente");
  } catch (error) {
    console.error("Error al eliminar el documento:", error);
  }
};
