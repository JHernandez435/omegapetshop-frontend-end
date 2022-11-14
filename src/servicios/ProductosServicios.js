import axios from "axios";

const ProductosServicios = {}
// const URL = "http://localhost:8000/api/productos/";
const URI = "https://omegapetshop-api.herokuapp.com/";

    
ProductosServicios.listarProductos = () => {
    return axios.get(URI+"api/productos");
}

ProductosServicios.listarProductosDisponibles = () => {
    return axios.get(URI+"api/productos?disp=true");
}

ProductosServicios.filtrarProductos = (criterio) => {
    return axios.get(URI+"api/productos?q="+criterio);
}

ProductosServicios.filtrarProductosDisponibles = (criterio) => {
    return axios.get(URI+"api/productos?q="+criterio+"&disp=true");
}

ProductosServicios.cargarProducto = (id) => {
    return axios.get(URI+ "api/productos" + id);
}

ProductosServicios.guardarProducto = (producto) => {
    return axios.post(URI, +"api/productos", producto);
}

ProductosServicios.modificarProducto = (id, producto) => {
    return axios.put(URI + "api/productos" + id, producto);
}

ProductosServicios.borrarProducto = (id) => {
    return axios.delete(URI + "api/productos" + id);
}

export default ProductosServicios;