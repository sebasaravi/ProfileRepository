import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import style from "../styles/globalComponents.module.css"
import Figure from "react-bootstrap/Figure"
import Image from "react-bootstrap/Image"


export default function Footer(){
    return(
        <>
        <div className={style.footerbody}>
            <Navbar >
                <Container>
                    <Figure.Image
                                width={40}
                                height={40}
                                src="github.png" rounded></Figure.Image>
                    <Figure.Image
                                width={40}
                                height={40}
                                src="instagram.png" rounded></Figure.Image>
                    <Figure.Image
                                width={40}
                                height={40}
                                src="linkedin.png" rounded></Figure.Image>
                    <Figure.Image
                                width={40}
                                height={40}
                                src="facebook.png" rounded></Figure.Image>
                </Container>
            </Navbar>
            <div>
                <div className={style.footer}>
                    <Navbar.Brand>
                        <Image src="simbolo-de-copyright.png"></Image>
                         2023 Copyright: Sebastian Arias Aviles
                    </Navbar.Brand>
                </div>
            </div>
        </div>
        </>
    )
}