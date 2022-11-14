import axios from "axios";

const CategoriasServicios = {}
// const URL = "http://localhost:8080/api/categorias/";
const URI = "https://omegapetshop-api.herokuapp.com/";

    
CategoriasServicios.listarCategorias = () => {
    return axios.get(URI);
}

CategoriasServicios.listarCategoriasHabilitadas = () => {
    return axios.get(URI + "?hab=true");
}

CategoriasServicios.cargarCategoria = (id) => {
    return axios.get(URI + id);
}

CategoriasServicios.guardarCategoria = (categoria) => {
    return axios.post(URI, categoria);
}

CategoriasServicios.modificarCategoria = (id, categoria) => {
    return axios.put(URI + id, categoria);
}

CategoriasServicios.borrarCategoria = (id) => {
    return axios.delete(URI + id);
}

export default CategoriasServicios;