document.addEventListener('DOMContentLoaded', function() {
    const formularioPacientes = document.getElementById('formulario-pacientes');
    const formularioCitas = document.getElementById('formulario-citas');
    const citaModal = document.getElementById('cita-modal');
    const comprobanteModal = document.getElementById('comprobante-modal');
    const closeModal = document.querySelector('.close');
    const closeComprobante = document.querySelector('.close-comprobante');
    const printButton = document.getElementById('print-button');

    let nombrePaciente, cedulaPaciente;
    let notificacionMostrada = false;

    formularioPacientes.addEventListener('submit', function(event) {
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

    formularioCitas.addEventListener('submit', function(event) {
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

    closeModal.addEventListener('click', function() {
        citaModal.style.display = 'none';
        notificacionMostrada = false;
    });

    closeComprobante.addEventListener('click', function() {
        comprobanteModal.style.display = 'none'; 
    });

    printButton.addEventListener('click', function() {
        window.print(); 
    });

    window.addEventListener('click', function(event) {
        if (event.target === citaModal) {
            citaModal.style.display = 'none';
            notificacionMostrada = false;
        }
        if (event.target === comprobanteModal) {
            comprobanteModal.style.display = 'none';
        }
    });
});


function soloNumeros(event) {
    const key = event.key;
    const isNumber = /^[0-9]$/.test(key);
    if (!isNumber && key !== "Backspace" && key !== "Tab") {
        event.preventDefault();
    }
}


const cedulaInput = document.getElementById('cedula');
const telefonoInput = document.getElementById('telefono');


cedulaInput.addEventListener('keypress', soloNumeros);
telefonoInput.addEventListener('keypress', soloNumeros);


const notificacion = document.getElementById('notificacion');
const mensajeNotificacion = document.getElementById('mensaje-notificacion');


function mostrarNotificacion(mensaje) {
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

// Seleccionamos el logo y la barra de navegación
const logo = document.querySelector('.navbar .logo');
const navbar = document.querySelector('.navbar');

// Agregamos el evento al pasar el mouse sobre el logo
logo.addEventListener('mouseenter', () => {
    navbar.classList.add('visible'); // Muestra la barra al pasar el mouse sobre el logo
});

// Agregamos el evento al salir el mouse del logo
logo.addEventListener('mouseleave', () => {
    navbar.classList.remove('visible'); // Oculta la barra al quitar el mouse del logo
});

