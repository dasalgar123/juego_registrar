// Manejo de evento para el botón de registrar
document.getElementById('btnRegistrar').addEventListener('click', (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Obtiene los valores del formulario
    const nombre = document.querySelector('input[placeholder="favor, ingrese su nombre"]').value;
    const contraseña = document.querySelector('input[placeholder="favor, ingrese su contraseña"]').value;

    // Recupera los datos de usuarios almacenados
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica si el usuario ya existe
    const usuarioExistente = usuarios.find(user => user.nombre === nombre);

    const mensajeContainer = document.getElementById('mensaje'); // Contenedor para el mensaje
    mensajeContainer.textContent = ''; // Limpia el contenedor antes de mostrar un nuevo mensaje

    if (!usuarioExistente) {
        // Agrega el nuevo usuario
        usuarios.push({ nombre, contraseña });
        localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Guarda los datos en localStorage

        // Mostrar mensaje de registro exitoso
        const mensaje = document.createElement("div");
        mensaje.textContent = "¡Registro exitoso!";
        mensaje.style.color = "green"; // Personaliza el estilo si lo deseas
        mensajeContainer.appendChild(mensaje); // Agrega el mensaje al contenedor
    } else {
        mensajeContainer.textContent = 'El usuario ya existe.'; // Mensaje si el usuario ya está registrado
        mensajeContainer.style.color = "red"; // Cambia el color a rojo para el mensaje de error
    }
});

// Manejo de evento para el botón de entrar
document.getElementById('btnEntrar').addEventListener('click', (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Obtiene los valores del formulario
    const nombre = document.querySelector('input[placeholder="favor, ingrese su nombre"]').value;
    const contraseña = document.querySelector('input[placeholder="favor, ingrese su contraseña"]').value;

    // Recupera los datos de usuarios almacenados
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Busca un usuario que coincida con el nombre y la contraseña
    const usuario = usuarios.find(user => user.nombre === nombre && user.contraseña === contraseña);

    const mensajeContainer = document.getElementById('mensaje'); // Contenedor para el mensaje
    mensajeContainer.textContent = ''; // Limpia el contenedor antes de mostrar un nuevo mensaje

    if (usuario) {
        alert('Inicio de sesión exitoso!'); // Mensaje de éxito
        // Redirigir a otra página
        window.location.href = 'pagina_destino.html'; // Cambia esto a la página deseada
    } else {
        mensajeContainer.textContent = 'Nombre o contraseña incorrectos.'; // Mensaje de error
        mensajeContainer.style.color = "red"; // Cambia el color a rojo para el mensaje de error
    }
});

// Manejo de eventos para otros botones
document.getElementById('btnInicio').addEventListener('click', (e) => {
    e.preventDefault();
    cargarPagina('https://https://juegopagprincipal.netlify.app'); // Cambia esto a la página de inicio
});

document.getElementById('btnSalir').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Sesión cerrada');
    // Puedes redirigir a la página principal o realizar otra acción
});
