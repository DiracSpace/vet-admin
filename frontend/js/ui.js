const registerdateform = document.querySelector('#cita');
const registerclientform = document.querySelector('#cliente');

const createListElement = (paciente, id) => {
    const template = `
        <li class="collection-item all-rounder">
            <div>
                <span class="align-text-icon">
                    <i class="material-icons">pets</i>
                    ${paciente}
                </span>
                <a href="#" id="delete" class="secondary-content">
                    <i class="material-icons">delete_outline</i>
                </a>
            </div>
        </li>
    `;
    return template;
}

const createModalElement = (id, motivo_visita, fecha_visita) => {
    const template = `
        <div id="${id}" class="modal bottom-sheet">
            <div class="modal-content">
                <h4>Información de cita</h4>
                <p>${motivo_visita}</p>
                <p>${fecha_visita}</p>
            </div>
        </div>
    `;
    return template;
}

const setupUI = (data) => {
    const ul = document.querySelector('.collectionlist');
    data.forEach(element => {
        ul.innerHTML += createListElement(element.paciente, element.id);
    })
}

registerdateform.addEventListener('submit', e => {
    e.preventDefault();
    const cita = {
        paciente: registerdateform['paciente'].value,
        fecha_visita: registerdateform['fecha_visita'].value,
        motivo_visita: registerdateform['motivo_visita'].value
    }
    createCita(cita);
    registerdateform.reset();
});

registerclientform.addEventListener('submit', e => {
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

document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('clicked');
    });
});