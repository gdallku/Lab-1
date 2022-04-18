// import React, { Component } from 'react';
// import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

// export class EditFoodModal extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { kodi: [], chinesefoods: [], italianfoods: [], desserts: [], seafoods: [], fastfood: [], tradicionals: [], salads: [], others: [] };
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     componentDidMount() {
//         fetch('https://localhost:44365/api/kodi')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ kodi: data });
//             });
//         fetch('https://localhost:44365/api/chinesefoods')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ chinesefoods: data });
//             });
//         fetch('https://localhost:44365/api/italianfoods')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ italianfoods: data });
//             });
//         fetch('https://localhost:44365/api/desserts')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ desserts: data });
//             });
//         fetch('https://localhost:44365/api/seafoods')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ seafoods: data });
//             });
//         fetch('https://localhost:44365/api/fastfood')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ fastfood: data });
//             });
//         fetch('https://localhost:44365/api/tradicional')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ tradicionals: data });
//             });
//         fetch('https://localhost:44365/api/salads')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ salads: data });
//             });
//         fetch('https://localhost:44365/api/other')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ other: data });
//             });
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         fetch('https://localhost:44365/api/food', {
//             method: 'PUT',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 FID: event.target.FID.value,
//                 Kodi: event.target.Kodi.value,
//                 ChineseFoods: event.target.ChineseFoods.value,
//                 ItalianFoods: event.target.ItalianFoods.value,
//                 Desserts: event.target.Desserts.value,
//                 SeaFoods: event.target.SeaFoods.value,
//                 FastFood: event.target.FastFood.value,
//                 Tradicional: event.target.Tradicional.value,
//                 Salads: event.target.Salads.value,
//                 Other: event.target.Other.value,

//             })
//         })
//             .then(res => res.json())
//             .then((result) => {
//                 alert(result);
//             },
//                 (error) => {
//                     alert('Failed');
//                 })
//     }


//     render() {
//         return (
//             <div className="container">

//                 <Modal
//                     {...this.props}
//                     size="lg"
//                     aria-labelledby="contained-modal-title-vcenter"
//                     centered
//                 >
//                     <Modal.Header clooseButton>
//                         <Modal.Title id="contained-modal-title-vcenter">
//                             Edito Porosine
//                         </Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>

//                         <Row>
//                             <Col sm={6}>
//                                 <Form onSubmit={this.handleSubmit}>

//                                     <Form.Group controlId="FID">
//                                         <Form.Label>FID</Form.Label>
//                                         <Form.Control type="text" name="FID" required
//                                             placeholder="FID"
//                                             disabled
//                                             defaultValue={this.props.fid} />
//                                     </Form.Group>


//                                     <Form.Group controlId="Kodi">
//                                         <Form.Label>Kodi i Tavolines</Form.Label>
//                                         <Form.Control type="text" name="Kodi" required
//                                             placeholder="Kodi"
//                                             disabled
//                                             defaultValue={this.props.kodi} />
//                                     </Form.Group>


//                                     <Form.Group controlId="ChineseFoods">
//                                         <Form.Label>ChineseFoods</Form.Label>
//                                         <Form.Control as="select" defaultValue={this.props.chinesefoods}>
//                                             <option value="">Zgjedh Ushqimin</option>
//                                             {this.state.chinesefoods.map(chinesefoods =>
//                                                 <option key={chinesefoods.ChineseFoodsId}>{chinesefoods.ChineseFoodsName}</option>)}
//                                         </Form.Control>
//                                     </Form.Group>

//                                     <Form.Group controlId="ItalianFoods">
//                                         <Form.Label>ItalianFoods</Form.Label>
//                                         <Form.Control as="select" defaultValue={this.props.italianfoods}>
//                                             <option value="">Zgjedh Ushqimin</option>
//                                             {this.state.italianfoods.map(italianfoods =>
//                                                 <option key={italianfoods.ItalianFoodsId}>{italianfoods.ItalianFoodsName}</option>)}
//                                         </Form.Control>
//                                     </Form.Group>

//                                     <Form.Group controlId="Desserts">
//                                         <Form.Label>Desserts</Form.Label>
//                                         <Form.Control as="select" defaultValue={this.props.desserts}>
//                                             <option value="">Zgjedh Ushqimin</option>
//                                             {this.state.desserts.map(desserts =>
//                                                 <option key={desserts.DessertsId}>{desserts.DessertsName}</option>)}
//                                         </Form.Control>
//                                     </Form.Group>

//                                     <Form.Group controlId="SeaFoods">
//                                         <Form.Label>SeaFoods</Form.Label>
//                                         <Form.Control as="select" defaultValue={this.props.seafoods}>
//                                             <option value="">Zgjedh Ushqimin</option>
//                                             {this.state.seafoods.map(seafoods =>
//                                                 <option key={seafoods.SeaFoodsId}>{seafoods.SeaFoodsName}</option>)}
//                                         </Form.Control>
//                                     </Form.Group>

//                                     <Form.Group controlId="FastFood">
//                                         <Form.Label>FastFood</Form.Label>
//                                         <Form.Control as="select" defaultValue={this.props.fastfood}>
//                                             <option value="">Zgjedh Ushqimin</option>
//                                             {this.state.fastfood.map(fastfood =>
//                                                 <option key={fastfood.FastFoodId}>{fastfood.FastFoodName}</option>)}
//                                         </Form.Control>
//                                     </Form.Group>


//                                     <Form.Group controlId="Tradicional">
//                                         <Form.Label>Tradicional</Form.Label>
//                                         <Form.Control as="select" defaultValue={this.props.tradicionals}>
//                                             <option value="">Zgjedh Ushqimin</option>
//                                             {this.state.tradicionals.map(tradicional =>
//                                                 <option key={tradicional.TradicionalId}>{tradicional.TradicionalName}</option>)}
//                                         </Form.Control>
//                                     </Form.Group>

//                                     <Form.Group controlId="Salads">
//                                         <Form.Label>Salads</Form.Label>
//                                         <Form.Control as="select" defaultValue={this.props.salads}>
//                                             <option value="">Zgjedh Ushqimin</option>
//                                             {this.state.salads.map(salads =>
//                                                 <option key={salads.SaladsId}>{salads.SaladsName}</option>)}
//                                         </Form.Control>
//                                     </Form.Group>

//                                     <Form.Group controlId="Other">
//                                         <Form.Label>Other</Form.Label>
//                                         <Form.Control as="select" defaultValue={this.props.others}>
//                                             <option value="">Zgjedh Ushqimin</option>
//                                             {this.state.others.map(other =>
//                                                 <option key={other.OtherId}>{other.OtherName}</option>)}
//                                         </Form.Control>
//                                     </Form.Group>

//                                     <Form.Group>
//                                         <Button variant="primary" type="submit">
//                                             Update Porosine
//                                         </Button>
//                                     </Form.Group>
//                                 </Form>
//                             </Col>

//                             {/* <Col sm={6}>
//                 <Image width="200px" height="200px" 
//                 src={process.env.REACT_APP_PHOTOPATH+this.props.photofilename}/>
//                 <input onChange={this.handleFileSelected} type="File"/>
//             </Col> */}
//                         </Row>
//                     </Modal.Body>

//                     <Modal.Footer>
//                         <Button variant="danger" onClick={this.props.onHide}>Close</Button>
//                     </Modal.Footer>

//                 </Modal>

//             </div>
//         )
//     }

// }