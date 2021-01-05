const csrftoken = Cookies.get('csrftoken');
const baseurl = 'http://127.0.0.1:8000/';
const config = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-CSRFToken': csrftoken,
    }
}

const fetchCitas = async () => {
    await axios.get(baseurl  + 'citas/', config)
        .then((response) => {
            setupUI(response.data);
        })
        .catch((error) => {
            M.toast({ html: error });
        });
}

const fetchCitaSeleccionada = async (id) => {
    await axios.get(baseurl + 'citas/' + id + '/', config)
        .then((response) => {
            createModalElement(response.data);
        })
        .catch((error) => {
            M.toast({ html: error });
        });
}

const createCita = async (cita) => {
    await axios.post(baseurl + 'citas/', cita, config)
        .then((response) => {
            M.toast({ html: 'Se agendó su cita' });
        })
        .catch((error) => {
            M.toast({ html: error })
        });
}

const deleteCita = async (id) => {
    await axios.delete(baseurl + 'citas/' + id + '/', config)
        .then((response) => {
            M.toast({ html: 'Se eliminó la cita' });
        })
        .catch((error) => {
            M.toast({ html: error });
        });
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

document.addEventListener("DOMContentLoaded", () => {
    fetchCitas();
});