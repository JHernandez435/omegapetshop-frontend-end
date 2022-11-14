import axios from "axios";

const CategoriasServicios = {}
// const URL = "http://localhost:8000/api/categorias/";
const URI = "https://omegapetshop-api.herokuapp.com/";

    
CategoriasServicios.listarCategorias = () => {
    return axios.get(URI+"api/categorias");
}

CategoriasServicios.listarCategoriasHabilitadas = () => {
    return axios.get(URI + "api/categorias?hab=true");
}

CategoriasServicios.cargarCategoria = (id) => {
    return axios.get(URI + "api/categorias" +id);
}

CategoriasServicios.guardarCategoria = (categoria) => {
    return axios.post(URI, +"api/categorias"+ categoria);
}

CategoriasServicios.modificarCategoria = (id, categoria) => {
    return axios.put(URI +"api/categorias" + id, categoria);
}

CategoriasServicios.borrarCategoria = (id) => {
    return axios.delete(URI+ "api/categorias"+ id);
}

export default CategoriasServicios;