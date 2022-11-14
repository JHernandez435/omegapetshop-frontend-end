import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UsuariosServicios from "../../servicios/UsuarioServicios";
import FondoVentanas from "../general/FondoVentanas";

const FormUsuarios = () => {
    const { id } = useParams();
    const navigateTo = useNavigate();

    const [documento, setDocumento] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [confirm, setConfirm] = useState("");
    const [mensaje, setMensaje] = useState("");

    const guardarUsuario = async (event) => {
        event.preventDefault();

        if (password === confirm) {
            try {
                const usuario = {
                    documento: documento,
                    nombre: nombre,
                    apellido: apellido,
                    celular: celular,
                    email: email,
                    password: password,
                    tipoUsuario: tipoUsuario
                }
                console.log(usuario);
                if (id == null) {
                    await UsuariosServicios.guardarUsuario(usuario);
                    navigateTo("/");
                }
                else {
                    await UsuariosServicios.modificarUsuario(id, usuario);
                    navigateTo("/usuarios");
                }
            } catch (error) {
                setMensaje("Ocurrió un error");
            }
        }
        else {
            setMensaje("Las contraseñas no coinciden");
        }
    }

    const cargarUsuario = async () => {
        try {
            if (id != null) {
                const respuesta = await UsuariosServicios.buscarUsuario(id);
                if (respuesta.data != null) {
                    console.log(respuesta.data);
                    setDocumento(respuesta.data.documento);
                    setNombre(respuesta.data.nombre);
                    setApellido(respuesta.data.apellido);
                    setCelular(respuesta.data.celular);
                    setTipoUsuario(respuesta.data.tipoUsuario);
                    setEmail(respuesta.data.email);
                    setPassword(respuesta.data.password);
                    setConfirm(respuesta.data.password);
                }
                // setTitulo("Edición");
            }
            else {
                // setTitulo("Registro");
            }
        } catch (error) {
            console.log("Ocurrió un error");
        }
    }

    const cancelar = () => {
        if (id != null) {
            navigateTo("/usuarios");
        }
        else {
            navigateTo("/");
        }
    }

    useEffect(() => {
        cargarUsuario();
    },)
    
    const cambiarDocumento = (event) => {
        setDocumento(event.target.value);
    }

    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    }

    const cambiarApellido = (event) => {
        setApellido(event.target.value);
    }

    const cambiarCelular = (event) => {
        setCelular(event.target.value);
    }

    const cambiarTipoUsuario = (event) => {
        setTipoUsuario(event.target.value);
    }

    const cambiarEmail = (event) => {
        setEmail(event.target.value);
    }

    const cambiarPassword = (event) => {
        setPassword(event.target.value);
    }

    const cambiarConfirm = (event) => {
        setConfirm(event.target.value);
    }

    return (
        <div className="myDiv">
        <div className="container mt-3">
            <div>
                <h3>{tipoUsuario} de usuarios</h3>
                <form className="container" action="">
                    <div className="row">
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="documento">Ingrese documento *</label>
                            <input className="form-control form-control-sm" type="number" onChange={cambiarDocumento} readOnly={id != null ? true : false} value={documento} name="documento" id="documento" required />
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="nombre">Nombres *</label>
                            <input className="form-control form-control-sm" type="text" onChange={cambiarNombre} value={nombre} name="nombre" id="nombre" required />
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="apellido">Apellidos *</label>
                            <input className="form-control form-control-sm" type="text" onChange={cambiarApellido} value={apellido} name="apellido" id="apellido" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="celular">Celular *</label>
                            <input className="form-control form-control-sm" type="number" onChange={cambiarCelular} value={celular} name="celular" id="celular" required />
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="tipoUsuario">Tipo Usuario *</label>
                            <input className="form-control form-control-sm" type="tipoUsuario" onChange={cambiarTipoUsuario} value={tipoUsuario} name="tipoUsuario" id="tipoUsuario" required />
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="email">Email *</label>
                            <input className="form-control form-control-sm" type="email" onChange={cambiarEmail} value={email} name="email" id="email" required />
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="password">Contraseña *</label>
                            <input className="form-control form-control-sm" type="password" onChange={cambiarPassword} value={password} name="password" id="password" required />
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="confirm">Confirme contraseña *</label>
                            <input className="form-control form-control-sm" type="password" onChange={cambiarConfirm} value={confirm} name="confirm" id="confirm" required />
                        </div>
                    </div>
                    <div className="mt-3">
                        <button onClick={guardarUsuario} className="btn btn-primary me-2">Guardar</button>
                        <button onClick={cancelar} className="btn btn-secondary">Cancelar</button>
                        <div id="mensaje">{mensaje}</div>
                    </div>
                </form>
            </div>
        </div>
        <FondoVentanas />
        </div>
    )
}

export default FormUsuarios;