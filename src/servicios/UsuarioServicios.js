import axios from "axios";

const UsuariosServicios = {};
// const URL = "http://localhost:8000/api/clientes/";
const URI = "https://omegapetshop-api.herokuapp.com/";



UsuariosServicios.listarUsuarios = () => {
    return axios.get(URI+"api/clientes");
}

UsuariosServicios.buscarUsuarios = (criterio) => {
    return axios.get(URI+"api/clientes?q="+criterio);
}

UsuariosServicios.buscarCliente = (id) => {
    return axios.get(URI+"api/clientes" +id);
}

UsuariosServicios.guardarUsuario = (usuario) => {
    return axios.post(URI + "api/clientes"+ usuario);
}

UsuariosServicios.modificarCliente = (id, usuario) => {
    return axios.put(URI+"api/clientes"+id, usuario);
}

UsuariosServicios.borrarCliente = (id) => {
    return axios.delete(URI+"api/clientes"+id);
}

export default UsuariosServicios;
