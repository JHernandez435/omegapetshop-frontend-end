import axios from "axios";

const UsuariosServicios = {};
const URL = "http://localhost:8080/api/clientes/";
const URI = "https://omegapetshop-api.herokuapp.com/";



UsuariosServicios.listarUsuarios = () => {
    return axios.get(URL);
}

UsuariosServicios.buscarUsuarios = (criterio) => {
    return axios.get(URL+"?q="+criterio);
}

UsuariosServicios.buscarCliente = (id) => {
    return axios.get(URL+id);
}

UsuariosServicios.guardarUsuario = (usuario) => {
    return axios.post(URL, usuario);
}

UsuariosServicios.modificarCliente = (id, usuario) => {
    return axios.put(URL+id, usuario);
}

UsuariosServicios.borrarCliente = (id) => {
    return axios.delete(URL+id);
}

export default UsuariosServicios;
