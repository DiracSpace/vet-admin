const registerdateform = document.querySelector('#cita');
const registerclientform = document.querySelector('#cliente');

/* ui logic */ 
const createListElement = (paciente, id) => {
    const template = `
        <li class="collection-item all-rounder">
            <div>
                <span onclick="fetchCitaSeleccionada(${id});" class="align-text-icon">
                    <i class="material-icons">pets</i>
                    ${paciente}
                </span>
                <a href="#" onclick="deleteCita(${id});" class="secondary-content">
                    <i class="material-icons">delete_outline</i>
                </a>
            </div>
        </li>
    `;
    return template;
}

const createModalElement = (data) => {
    let ul = document.querySelector('.modals');
    const template = `
        <div id="${data.id}" class="modal bottom-sheet">
            <div class="modal-content">
                <h3>Información de cita</h3>
                <h5>Fecha elgida: ${data.fecha_visita}</h5>
                <br />
                <p class="flow-text">${data.motivo_visita}</p>
            </div>
        </div>
    `;
    ul.innerHTML = template;
    triggerModal(data.id);
}

function triggerModal(id) {
    const elem = document.getElementById(id);
    const instance = M.Modal.init(elem, {
        dismissable: false,
    });
    instance.open();
}

const setupUI = (data) => {
    let ul = document.querySelector('.collectionlist');
    data.forEach(element => {
        ul.innerHTML += createListElement(element.paciente, element.id);
    });
}

/* form logic */
document.getElementById('submitcita').addEventListener('click', e => {
    e.preventDefault();
    const cita = {
        paciente: registerdateform['paciente'].value,
        fecha_visita: registerdateform['fecha_visita'].value,
        motivo_visita: registerdateform['motivo_visita'].value
    }
    createCita(cita);
    registerdateform.reset();
});

document.getElementById('submituser').addEventListener('click', e => {
    e.preventDefault();
    const cliente = {
        propietario: registerclientform['propietario'].value,
        domicilio: registerclientform['domicilio'].value,
        colonia: registerclientform['colonia'].value,
        email: registerclientform['email'].value
    }
    createCliente(cliente);
    registerclientform.reset();
});

function eraseFrms() {
    registerclientform.reset();
    registerdateform.reset();
}