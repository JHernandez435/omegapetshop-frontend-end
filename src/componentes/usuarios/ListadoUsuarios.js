import { useState, useEffect } from "react";
import EstadoDatos from "../../enums/EstadoDatos";
import UsuariosServicios from "../../servicios/UsuarioServicios";
import React from 'react';
import FondoVentanas from "../general/FondoVentanas";

const ListadoUsuarios = () => {

    const [listadoUsuarios, setListadoUsuarios] = useState([]);
    const [estado, setEstado] = useState(EstadoDatos.CARGANDO);
    const [criterio, setCriterio] = useState("");
    const [idBorrar, setIdBorrar] = useState("");
    const [nombreBorrar, setNombreBorrar] = useState("");

    const cargarUsuarios = async () => {
        try {
            const respuesta = await UsuariosServicios.listarUsuarios();
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoUsuarios(respuesta.data);
                setEstado(EstadoDatos.OK);
            }
            else {
                setEstado(EstadoDatos.VACIO);
            }
        } catch (error) {
            setEstado(EstadoDatos.ERROR);
        }
    }

    const buscarUsuarios = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await UsuariosServicios.buscarUsuarios(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoUsuarios(respuesta.data);
                setEstado(EstadoDatos.OK);
            }
            else {
                setEstado(EstadoDatos.VACIO);
            }
        } catch (error) {
            setEstado(EstadoDatos.ERROR);
        }
    }

    const confirmarBorrado = (id, nombre) => {
        setIdBorrar(id);
        setNombreBorrar(nombre);
    }

    const borrarCliente = async () => {
        try {
            await UsuariosServicios.borrarCliente(idBorrar);
            cargarUsuarios();
        } catch (error) {
            
        }
    }

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }

    return (
        <div className="myDiv">
        <div className="container">
            <h4>Lista de Usuarios<a href="/usuarios/form" className="btn btn-sm btn-primary ms-3">Añadir Usuario</a> </h4>
            {/* <form action="">
                <input type="text" value={criterio} onChange={cambiarCriterio} id="criterio" name="criterio" />
                <button id="buscar" name="buscar" onClick={buscarUsuarios} >Buscar</button>
            </form> */}
            <form action="">
                <div className="row">
                    <div className="mb-3 col-4">
                        <input type="text" onChange={cambiarCriterio} value={criterio} className="form-control form-control-sm col-md-3" id="busqueda" name="busqueda" placeholder="Ingrese dato a buscar" />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-sm btn-primary" onClick={buscarUsuarios}>Buscar</button>
                    </div>
                </div>
            </form>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Nombres Completos</th>
                        <th>Documento</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {estado === EstadoDatos.CARGANDO ?
                        (<tr><td>
                            <div className="spinner-border text-secondary" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </td></tr>)
                        :
                        estado === EstadoDatos.ERROR ?
                            (<tr><td>Ocurrió un error, intente más tarde</td></tr>)
                            :
                            estado === EstadoDatos.VACIO ?
                                (<tr><td>No hay datos</td></tr>)
                                :
                                listadoUsuarios.map((usuario) => (
                                    <tr key={usuario._id}>
                                        <td>{usuario.nombres + " " + usuario.apellidos}</td>
                                        <td>{usuario.documento}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.telefono}</td>
                                        <td>
                                            <a className="btn btn-sm btn-warning me-2" href={"/usuarios/form/" + usuario._id}>Editar</a>
                                            <button onClick={() => {confirmarBorrado(usuario._id, usuario.nombre + " " + usuario.apellido)}} className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrado">Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                    }
                </tbody>
            </table>

            <div className="modal fade" id="modalBorrado" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Borrado de usuario</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Está seguro de borrar el usuario {nombreBorrar}?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={borrarCliente} className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <FondoVentanas />;
        </div>
    )
}

export default ListadoUsuarios;
