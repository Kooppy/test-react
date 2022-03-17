import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { getMessage, postMessage } from '../store/actions/contactActions';

const FormContact = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mess, setMessage] = useState("");
    // const message = useSelector(state => state.message.flash)
  
    useEffect(() => {
      dispatch(getMessage())
    })
  
    const handleForm = async (e) => {
      e.preventDefault();
      console.log("contact", name, email, mess); 
  
      if (name) {
        await dispatch(postMessage({ name, email, mess }));
        setName("");
        setEmail("");
        setMessage("");
      }
    };
  
    return (
        <Container >
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form className='my-4' onSubmit={(e) => handleForm(e)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} value={mess} onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>
                        <Button type='submit'>Envoyer</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
  };
 

// class FormContact extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: null,
//             email: null,
//             mess: null
//         }
//     }

//     handleForm = async (e) => {
//       e.preventDefault();
//       console.log("submit form register", this.state.name); 
  
//       if (this.state.name) {
//         await dispatch(postMessage({ name:this.state.name}));
//         // setName("");
//         // setEmail("");
//         // setMessage("");
//       }
//     };

//     render () {
//         return (
//             <Container >
//                 <Row>
//                     <Col md={{ span: 6, offset: 3 }}>
//                         <Form className='my-4'>
//                             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                 <Form.Label>{ message }</Form.Label>
//                                 <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
//                             </Form.Group>
//                             <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control type="email" placeholder="Email" />
//                             </Form.Group>
//                             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                                 <Form.Label>Message</Form.Label>
//                                 <Form.Control as="textarea" rows={1} />
//                             </Form.Group>
//                             <Button >Envoyer</Button>
//                         </Form>
//                     </Col>
//                 </Row>
//             </Container>
//         )
//     }
// }

export default FormContact;