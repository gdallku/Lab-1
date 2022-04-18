import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditFoodItemModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
 
    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44365/api/fooditem',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                FoodItemId:event.target.FoodItemId.value,
                FoodItemName:event.target.FoodItemName.value,
                Price:event.target.Price.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }



    render(){
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
            Edit FoodItem
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="FoodItemId">
                        <Form.Label>FoodItemId</Form.Label>
                        <Form.Control type="text" name="FoodItemId" required 
                        placeholder="FoodItemId"
                        disabled
                        defaultValue={this.props.fooditemid}/>
                    </Form.Group>

                    <Form.Group controlId="FoodItemName">
                        <Form.Label>FoodItemName</Form.Label>
                        <Form.Control type="text" name="FoodItemName" required 
                        defaultValue={this.props.fooditemname}
                        placeholder="FoodItemName"/>
                    </Form.Group>

                    <Form.Group controlId="Price">
                        <Form.Label>Price - €</Form.Label>
                        <Form.Control type="text" name="Price" required 
                        defaultValue={this.props.price}
                        placeholder="Price"/>
                    </Form.Group>
                    
                

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update FoodItem
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