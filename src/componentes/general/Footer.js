import FooterMinTic from "../../assets/UIS-MinTic.png"

const Footer = () => {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted">&copy; Tripulantes U2-Grupo 01 - MinTic 2022</p>

                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src={FooterMinTic} alt="HeaderYoda" width="500" height="80"></img>
                </a>

                {/* <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="/productos" class="nav-link px-2 text-muted">Productos</a></li>
                    <li class="nav-item"><a href="/categorias" class="nav-link px-2 text-muted">Categorias</a></li>
                    <li class="nav-item"><a href="/usuarios" class="nav-link px-2 text-muted">Usuarios</a></li>
                    <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Dev</a></li>
                </ul> */}
            </footer>
        </div>
    )
}

export default Footer;