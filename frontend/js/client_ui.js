const registerclientform = document.querySelector('#cliente');

const createListElement = (cliente) => {
    const template = `
        <li onclick="redirect(${cliente.id});" class="collection-item avatar">
            <i class="material-icons circle">account_circle</i>
            <span class="title">#${cliente.id}</span>
            <p class="flow-text">${cliente.propietario}</p>
            <a href="#!" onclick="deleteClient(${cliente.id});" class="secondary-content">
                <i class="material-icons">delete_outline</i>
            </a>
        </li>
    `;
    return template;
}

const setupUI = (data) => {
    let ul = document.querySelector('.collection');
    data.forEach(cliente => {
        ul.innerHTML += createListElement(cliente);
    });
}

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
}

function redirect(id) {
    window.location.replace('/frontend/pages/client_details.html?id=' + id);
}