document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    nombreFormulario();
    correoFormulario();
    mensajeFormulario();
    InputFormulario();
}

let check = ['', '', ''];

function nombreFormulario() {
    const nombreInput = document.querySelector('#nombre');
    nombreInput.addEventListener('change', event => {
        const nombre = event.target.value;
        if(nombre === '' || nombre.length < 3) {
            showMessage('Formulario incompleto', 'error');
            check[0] = false;
        } else {
            check[0] = true;
        }
    });
}

function correoFormulario() {
    const correoInput = document.querySelector('#correo');
    correoInput.addEventListener('change', event => {
        const correo = event.target.value;
        if(correo.includes('@')) {
            check[1] = true;
        } else {
            showMessage('Formulario incompleto', 'error');
            check[1] = false;
        }
    });
}

function mensajeFormulario() {
    const mensajeInput = document.querySelector('#mensaje');
    mensajeInput.addEventListener('change', event => {
        const mensaje = event.target.value;
        if(mensaje === '' || mensaje.length < 3) {
            showMessage('Formulario incompleto', 'error');
            check[2] = false;
        } else {
            check[2] = true;
        }
    });
}

function showMessage(message, type) {
    const mensajePrevio = document.querySelector('.mensaje');
    if(mensajePrevio) {
        return;
    }
    const contacto = document.querySelector('.contacto');
    const mensajeDiv = document.createElement('DIV');
    const mensajeP = document.createElement('P');
    mensajeDiv.classList.add('mensaje');
    mensajeP.classList.add(`mensaje__${type}`);
    mensajeP.textContent = message;

    mensajeDiv.appendChild(mensajeP);
    contacto.appendChild(mensajeDiv);
    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

function InputFormulario() {
    boton = document.querySelector('#boton');
    boton.addEventListener('click', event => {
        event.preventDefault();
        checkForm();
    });
}

function checkForm() {
    if(check.includes(false)) {
        showMessage('Formulario incompleto', 'error');
    } else {
        showMessage('Formulario enviado', 'right');
    }
}