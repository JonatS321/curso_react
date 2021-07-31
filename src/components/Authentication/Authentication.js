import React, { useState } from "react";
import { fb } from "../../firebase";
import firebase from "firebase/app";
import "firebase/auth";

//import { useFirebaseApp } from "reactfire";
import { Modal, Button, Form} from "react-bootstrap";

const Authentication = () => {

	//const auth = fb.firebase.auth();


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	const login = async () =>{
		console.log(email,password)
		await firebase.auth().signInWithEmailAndPassword(email, password);
		console.log(fb)

	}

	const createUser = async () => {
		console.log(email,password)
		await firebase.auth().createUserWithEmailAndPassword(email, password);
	}
 
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                INGRESAR
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>INICIO SESION / REGISTRO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
				<Form>
                <Form.Group className="mb-3">

                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={ (e) => setEmail(e.target.value)}
                        value={email}
                    />
					<Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>
				</Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={login}>
                        INICIAR SESION
                    </Button>
                    <Button variant="primary" onClick={createUser}>
                        CREAR USUARIO
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Authentication
