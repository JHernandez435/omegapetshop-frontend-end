import axios from "axios";

const ProductosServicios = {}
// const URL = "http://localhost:8000/api/productos/";
const URI = "https://omegapetshop-api.herokuapp.com";

    
ProductosServicios.listarProductos = () => {
    return axios.get(URI);
}

ProductosServicios.listarProductosDisponibles = () => {
    return axios.get(URI+"?disp=true");
}

ProductosServicios.filtrarProductos = (criterio) => {
    return axios.get(URI+"?q="+criterio);
}

ProductosServicios.filtrarProductosDisponibles = (criterio) => {
    return axios.get(URI+"?q="+criterio+"&disp=true");
}

ProductosServicios.cargarProducto = (id) => {
    return axios.get(URI + id);
}

ProductosServicios.guardarProducto = (producto) => {
    return axios.post(URI, producto);
}

ProductosServicios.modificarProducto = (id, producto) => {
    return axios.put(URI + id, producto);
}

ProductosServicios.borrarProducto = (id) => {
    return axios.delete(URI + id);
}

export default ProductosServicios;