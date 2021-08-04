const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregartarea = document.querySelector('.btn-agregar-tarea');

const listadoTareas = document.querySelector('.listado-de-tareas');

const local = window.localStorage;

btnAgregartarea.onclick = () => {
  const contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    numero: numero.value,
    direccion: direccion.value
  };
  
  guardarContacto(local, contacto);
}

cargarContacto(local, listadoTareas);
