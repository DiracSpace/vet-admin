document.addEventListener("DOMContentLoaded", () => {
    fetchClienteSeleccionado(preventNull('id', 0));
    fetchPacientesDeClienteSeleccionado(preventNull('id', 0));
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function preventNull(parameter, defaultparameter) {
    var urlparameter = defaultparameter;
    if (window.location.href.indexOf(parameter) > -1) {
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter
}

const setupProfileUI = (patient) => {
    console.log(patient);
}

const setupPatientsUI = (patients) => {
    var arrayOfPatients = objectToArray(patients);
    arrayOfPatients.forEach(patient => {
        console.log(patient);
    });
}

const objectToArray = (json) => {
    const array = [];
    const keys = Object.keys(json);
    keys.forEach(element => {
        array[+element] = json[element];
    });
    return array;
};