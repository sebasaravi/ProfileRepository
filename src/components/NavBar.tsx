import Navbar from "react-bootstrap/Navbar"
import Conteiner from "react-bootstrap/Container"
import style from "../styles/globalComponents.module.css"

export default function NavBar(){
    return(
            <Navbar className={style.navbarConteiner}>
                <Conteiner>
                <Navbar.Brand href="#index">Home</Navbar.Brand>
                    <Navbar.Brand href="https://github.com/sebasaravi">Github</Navbar.Brand>
                    <Navbar.Brand href="https://www.linkedin.com/in/sebastian-arias-aviles/">LinkedIn</Navbar.Brand>
                    <Navbar.Brand href="https://www.instagram.com/sebas_arav/">Instagram</Navbar.Brand>
                    <Navbar.Brand href="https://www.facebook.com/sebas.arias.10297/">Facebook</Navbar.Brand>
                </Conteiner>
            </Navbar>
    )
}