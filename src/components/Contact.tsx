import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import  FloatingLabel  from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import style from "../styles/globalComponents.module.css"


export default function Information(){
    return(
        <>
            <Form className={style.call}>
                    <div className={style.callafter}>
                    <h1>Call to Back</h1>
                    </div>
                    
                    <div className={style.callcenter}>
                    <Form.Group as={Col} md="15" className="center">
                        <FloatingLabel controlId="FirstName" label="First Name" className="mb-3">
                            <Form.Control type="text" placeholder="First Name"></Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="15">
                        <FloatingLabel controlId="LastName" label="Last Name" className="mb-3">
                            <Form.Control type="text" placeholder="Last Name"></Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="15">
                        <FloatingLabel controlId="Email" label="Email" className="mb-3">
                            <Form.Control type="text" placeholder="Email"></Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="15">
                        <FloatingLabel controlId="Reason" label="Reason to contact" className="mb-3">
                            <Form.Control as="textarea" rows={3} placeholder="Reason"></Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting" feedbackType="invalid"></Form.Check>
                    <Button type="submit" variant="outline-primary">Submit</Button>
                    </div>
            </Form>
        </>
    )
}