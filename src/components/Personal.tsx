import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import style from "../styles/globalComponents.module.css"
import 'animate.css'



export default function Personal(){
    return(
        <>
        <div className={style.personalinf}>
            <h2 className="animate__animated animate__backInDown">Welcome</h2>
            <h1 className="animate__animated animate__backInDown">
                I'm UI/UX Designer and A Full Stack Programmer
            </h1>
        </div>
            <div className={style.personalgeneral}>
                <Row>
                    <Col>
                        <Figure.Image
                                width={260}
                                height={629}
                                src="personal.jpg" rounded></Figure.Image>
                    </Col>
                    <Col>
                        <div>
                            <h1>Hello guys, my name is Sebastian!</h1>
                            <p>
                            As a professional software developer, I have gained valuable experience working for 
                            top-tier companies such as Google and Microsoft. With expertise in full-stack development, 
                            I excel in creating robust applications and delivering seamless user experiences. My skills include proficiency in front-end and back-end technologies, such as JavaScript, React, Node.js, and databases. I am dedicated to staying up to date with the latest industry trends and continuously expanding my skill set. Overall, 
                            my experience and versatility make me a valuable asset in any software development project.
                            </p>
                            <a>
                                <Figure.Image
                                    width={64}
                                    height={64}
                                    src="linkedin.png"
                                    ></Figure.Image>
                                <Figure.Image
                                    width={64}
                                    height={64}
                                    src="github.png" roundedCircle ></Figure.Image>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}