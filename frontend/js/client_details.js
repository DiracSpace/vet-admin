const csrftoken = Cookies.get('csrftoken');
const baseurl = 'http://127.0.0.1:8000/';
const config = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-CSRFToken': csrftoken,
    }
}

const fetchClienteSeleccionado = async (id) => {
    await axios.get(baseurl + 'clientes/' + id + '/', config)
        .then((response) => {
            setupProfileUI(response.data);
        })
        .catch((error) => {
            M.toast({ html: error });
        })
}

const fetchPacientesDeClienteSeleccionado = async (id) => {
    await axios.get(baseurl + 'pacientes/' + '?propietario=' + id, config)
        .then((response) => {
            setupPatientsUI(response.data);
        })
        .catch((error) => {
            M.toast({ html: error });
        });
}