import axios from "axios";

const UsuariosServicios = {};
// const URL = "http://localhost:8000/api/clientes/";
const URI = "https://omegapetshop-api.herokuapp.com";



UsuariosServicios.listarUsuarios = () => {
    return axios.get(URI);
}

UsuariosServicios.buscarUsuarios = (criterio) => {
    return axios.get(URI+"?q="+criterio);
}

UsuariosServicios.buscarCliente = (id) => {
    return axios.get(URI+id);
}

UsuariosServicios.guardarUsuario = (usuario) => {
    return axios.post(URI, usuario);
}

UsuariosServicios.modificarCliente = (id, usuario) => {
    return axios.put(URI+id, usuario);
}

UsuariosServicios.borrarCliente = (id) => {
    return axios.delete(URI+id);
}

export default UsuariosServicios;
