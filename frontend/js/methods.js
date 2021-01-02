const fetchCitas = () => {
    axios.get('http://127.0.0.1:8000/citas/')
        .then((response) => {
            setupUI(response.data);
        })
        .catch((error) => {
            if (error.name === "NetworkError") {
                M.toast({html: 'No cuentas con conexión'});
            } else {
                M.toast({html: error})
            }
        });
}

const createCita = (cita) => {
    axios.post('http://127.0.0.1:8000/citas/', cita)
        .then((response) => {
            M.toast({html: 'Se agendó su cita'});
        })
        .catch((error) => {
            M.toast({html: error})
        });
}

const createCliente = (cliente) => {
    axios.post('http://127.0.0.1:8000/clientes/', cliente)
        .then((response) => {
            M.toast({html: 'Se agregó al cliente'});
        })
        .catch((error) => {
            M.toast({html: error});
        })
}

document.addEventListener("DOMContentLoaded", () => {
    fetchCitas();
});