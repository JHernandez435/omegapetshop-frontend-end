import axios from "axios";

const ProductosServicios = {}
// const URL = "http://localhost:8000/api/productos/";
const URI = "https://omegapetshop-api.herokuapp.com/";

    
ProductosServicios.listarProductos = () => {
    return axios.get(URI+"api/produtos");
}

ProductosServicios.listarProductosDisponibles = () => {
    return axios.get(URI+"api/produtos?disp=true");
}

ProductosServicios.filtrarProductos = (criterio) => {
    return axios.get(URI+"api/produtos?q="+criterio);
}

ProductosServicios.filtrarProductosDisponibles = (criterio) => {
    return axios.get(URI+"api/produtos?q="+criterio+"&disp=true");
}

ProductosServicios.cargarProducto = (id) => {
    return axios.get(URI+ "api/produtos" + id);
}

ProductosServicios.guardarProducto = (producto) => {
    return axios.post(URI, +"api/produtos"+ producto);
}

ProductosServicios.modificarProducto = (id, producto) => {
    return axios.put(URI + "api/produtos" + id, producto);
}

ProductosServicios.borrarProducto = (id) => {
    return axios.delete(URI + "api/produtos" + id);
}

export default ProductosServicios;