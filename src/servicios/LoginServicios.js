import axios from "axios";

const LoginServicios = {}
// const URL = "http://localhost:8000/api/login/";
const URI = "https://omegapetshop-api.herokuapp.com/";

    
LoginServicios.login = (credenciales) => {
    return axios.post(URI + "api/login/", credenciales);
}

export default LoginServicios;