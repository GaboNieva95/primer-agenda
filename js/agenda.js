const nombre = document.querySelector('.nombre');
const número = document.querySelector('.número');
const dirección = document.querySelector('.dirección');
const btnAgregartarea = document.querySelector('.btn-agregar-tarea');

const listadoTareas = document.querySelector('.listado-de-tareas');

const local = window.localStorage;

btnAgregartarea.onclick = () => {
  const contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    número: número.value,
    dirección: dirección.value
  };
  
  guardarContacto(local, contacto);
}

cargarContacto(local, listadoTareas);
