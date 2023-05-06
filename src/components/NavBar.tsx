import Navbar from "react-bootstrap/Navbar"
import Conteiner from "react-bootstrap/Container"
import style from "../styles/globalComponents.module.css"
import Figure from "react-bootstrap/Figure"

export default function NavBar(){
    return(
            <Navbar className={style.navbarConteiner}>
                <Conteiner>
                <Figure.Image
                                width={80}
                                height={80}
                                src="github.png" rounded></Figure.Image>
                <Figure.Image
                                width={80}
                                height={80}
                                src="instagram.png" rounded></Figure.Image>
                <Figure.Image
                                width={80}
                                height={80}
                                src="linkedin.png" rounded></Figure.Image>
                <Figure.Image
                                width={80}
                                height={80}
                                src="facebook.png" rounded></Figure.Image>
                </Conteiner>
            </Navbar>
    )
}