const csrftoken = Cookies.get('csrftoken');
// const baseurl = 'http://127.0.0.1:8090/';
const baseurl = 'https://177.237.244.204:8090/';
const config = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'X-CSRFToken': csrftoken,
    }
}

const fetchClientes = async () => {
    await axios.get(baseurl + 'clientes/', config)
        .then((response) => {
            setupUI(response.data);
        })
        .catch((error) => {
            M.toast({ html: error });
        })
}

const createCliente = async (cliente) => {
    await axios.post(baseurl + 'clientes/', cliente, config)
        .then((response) => {
            M.toast({ html: 'Se agregó al cliente' });
        })
        .catch((error) => {
            M.toast({ html: error });
        })
}

const deleteClient = async (id) => {
    await axios.delete(baseurl + 'clientes/' + id + '/', config)
        .then((response) => {
            M.toast({ html: 'Se eliminó el cliente' });
        })
        .catch((error) => {
            M.toast({ html: error });
        })
}

const fetchClienteSeleccionado = async (id) => {
    await axios.get(baseurl + 'clientes/' + id + '/', config)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            M.toast({ html: error });
        })
}

const fetchPacientesDeClienteSeleccionado = async (id) => {
    await axios.get(baseurl + 'pacientes/' + '?propietario=' + id, config)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            M.toast({ html: error });
        });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchClientes();
});