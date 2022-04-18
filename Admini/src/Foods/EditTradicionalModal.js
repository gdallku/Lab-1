import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

export class EditTradicionalModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('https://localhost:44365/api/tradicional', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                TradicionalId: event.target.TradicionalId.value,
                TradicionalName: event.target.TradicionalName.value,
                Price: event.target.Price.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }



    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="TradicionalId">
                                        <Form.Label>TradicionalId</Form.Label>
                                        <Form.Control type="text" name="TradicionalId" required
                                            placeholder="TradicionalId"
                                            disabled
                                            defaultValue={this.props.tradicionalid} />
                                    </Form.Group>

                                    <Form.Group controlId="TradicionalName">
                                        <Form.Label>TradicionalName</Form.Label>
                                        <Form.Control type="text" name="TradicionalName" required
                                            defaultValue={this.props.tradicionalname}
                                            placeholder="TradicionalName" />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" name="Price" required
                                            defaultValue={this.props.price}
                                            placeholder="Price" />
                                    </Form.Group>



                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update
                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}