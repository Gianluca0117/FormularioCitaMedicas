document.addEventListener('DOMContentLoaded', function () {
    // Elementos del formulario y modales
    const formularioPacientes = document.getElementById('formulario-pacientes');
    const formularioCitas = document.getElementById('formulario-citas');
    const citaModal = document.getElementById('cita-modal');
    const comprobanteModal = document.getElementById('comprobante-modal');
    const closeModal = document.querySelector('.close');
    const closeComprobante = document.querySelector('.close-comprobante');
    const printButton = document.getElementById('print-button');

    let nombrePaciente, cedulaPaciente;
    let notificacionMostrada = false;

    // Función para manejar la notificación
    function mostrarNotificacion(mensaje) {
        const notificacion = document.getElementById('notificacion');
        const mensajeNotificacion = document.getElementById('mensaje-notificacion');
        mensajeNotificacion.textContent = mensaje;
        notificacion.classList.add('show');
        notificacion.style.display = 'block';

        setTimeout(() => {
            notificacion.classList.remove('show');
            setTimeout(() => {
                notificacion.style.display = 'none';
            }, 500);
        }, 3000);
    }

    // Evento para el formulario de pacientes
    formularioPacientes.addEventListener('submit', function (event) {
        event.preventDefault();
        nombrePaciente = document.getElementById('nombre').value;
        cedulaPaciente = document.getElementById('cedula').value;

        setTimeout(() => {
            if (!notificacionMostrada) {
                mostrarNotificacion(`¡Registro exitoso de ${nombrePaciente}!`);
                notificacionMostrada = true;
            }
            formularioPacientes.reset();
            citaModal.style.display = 'block';
        }, 500);
    });

    // Evento para el formulario de citas
    formularioCitas.addEventListener('submit', function (event) {
        event.preventDefault();

        const fechaCita = document.getElementById('fecha_cita').value;
        const horaCita = document.getElementById('hora_cita').value;

        setTimeout(() => {
            document.getElementById('comprobante-nombre').textContent = nombrePaciente;
            document.getElementById('comprobante-cedula').textContent = cedulaPaciente;
            document.getElementById('comprobante-fecha').textContent = fechaCita;
            document.getElementById('comprobante-hora').textContent = horaCita;
            comprobanteModal.style.display = 'block';

            mostrarNotificacion('¡Cita agendada exitosamente!');
            formularioCitas.reset();
            citaModal.style.display = 'none';
        }, 500);
    });

    // Funciones para cerrar modales
    closeModal.addEventListener('click', function () {
        citaModal.style.display = 'none';
        notificacionMostrada = false;
    });

    closeComprobante.addEventListener('click', function () {
        comprobanteModal.style.display = 'none';
    });

    printButton.addEventListener('click', function () {
        window.print();
    });

    // Evento para el logo y barra de navegación
    const logo = document.querySelector('.navbar .logo');
    const navbar = document.querySelector('.navbar');

    logo.addEventListener('mouseenter', () => {
        navbar.classList.add('visible');
    });

    logo.addEventListener('mouseleave', () => {
        navbar.classList.remove('visible');
    });

    // Solo permitir números en campos específicos
    const cedulaInput = document.getElementById('cedula');
    const telefonoInput = document.getElementById('telefono');

    cedulaInput.addEventListener('keypress', soloNumeros);
    telefonoInput.addEventListener('keypress', soloNumeros);

  
