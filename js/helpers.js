const guardarContacto = (local, contacto) => {
  local.setItem(contacto.id, JSON.stringify(contacto));
  window.location.href = '/';
};

const cargarContacto = (local, parentNode) => {
  const claves = Object.keys(local);

  claves.forEach(clave => {
    let contacto = JSON.parse(local.getItem(clave));
    crearContacto(parentNode, contacto, local);
  });
};

const crearContacto = (parentNode, contacto) => {
  const divContacto = document.createElement('div');
  const nombreContacto = document.createElement('h3');
  const númeroContacto = document.createElement('p');
  const direcciónContacto = document.createElement('p');
  const iconoBorrar = document.createElement('span');

  nombreContacto.innerHTML = contacto.nombre;
  númeroContacto.innerHTML = contacto.número;
  direcciónContacto.innerHTML = contacto.dirección;
  iconoBorrar.innerHTML = 'delete_forever';

  divContacto.classList.add('tarea');
  iconoBorrar.classList.add('material-icons', 'icono');

  iconoBorrar.onclick = () => {
    local.removeItem(contacto.id);
    window.location.href ='/';
  };

  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(númeroContacto);
  divContacto.appendChild(direcciónContacto);
  divContacto.appendChild(iconoBorrar);

  parentNode.appendChild(divContacto);
};