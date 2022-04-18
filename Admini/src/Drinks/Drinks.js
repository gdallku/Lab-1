import React,{Component} from 'react';
import {Table} from 'react-bootstrap';


import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddOtherDModal} from './AddOtherDModal';
import {EditOtherDModal} from './EditOtherDModal';
import {AddAlcoholicModal} from './AddAlcoholicModal';
import {EditAlcoholicModal} from './EditAlcoholicModal';
import {AddNonAlcoholicModal} from './AddNonAlcoholicModal';
import {EditNonAlcoholicModal} from './EditNonAlcoholicModal';
import {AddTeaModal} from './AddTeaModal';
import {EditTeaModal} from './EditTeaModal';
import {AddCoffeeModal} from './AddCoffeeModal';
import {EditCoffeeModal} from './EditCoffeeModal';



export class Alcoholic extends Component{
    
    constructor(props){
        super(props);
        this.state={alcoholics:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/alcoholic')
        .then(response=>response.json())
        .then(data=>{
            this.setState({alcoholics:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteAlcoholic(alcoholicid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/alcoholic/'+alcoholicid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {alcoholics, alcoholicid,alcoholicname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>AlcoholicId</th>
                        <th>AlcoholicName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alcoholics.map(alcoholic=>
                            <tr key={alcoholic.AlcoholicId}>
                                <td>{alcoholic.AlcoholicId}</td>
                                <td>{alcoholic.AlcoholicName}</td>
                                <td>{alcoholic.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        alcoholicid:alcoholic.AlcoholicId,alcoholicname:alcoholic.AlcoholicName,price:alcoholic.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteAlcoholic(alcoholic.AlcoholicId)}>
            Delete
        </Button>

        <EditAlcoholicModal show={this.state.editModalShow}
        onHide={editModalClose}
        alcoholicid={alcoholicid}
        alcoholicname={alcoholicname}
        price={price}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Drink</Button>

                    <AddAlcoholicModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}

export class NonAlcoholic extends Component{
    
    constructor(props){
        super(props);
        this.state={nonalcoholics:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/nonalcoholic')
        .then(response=>response.json())
        .then(data=>{
            this.setState({nonalcoholics:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteNonAlcoholic(nonalcoholicid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/nonalcoholic/'+nonalcoholicid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {nonalcoholics, nonalcoholicid,nonalcoholicname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>NonAlcoholicId</th>
                        <th>NonAlcoholicName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nonalcoholics.map(nonalcoholic=>
                            <tr key={nonalcoholic.NonAlcoholicId}>
                                <td>{nonalcoholic.NonAlcoholicId}</td>
                                <td>{nonalcoholic.NonAlcoholicName}</td>
                                <td>{nonalcoholic.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        nonalcoholicid:nonalcoholic.NonAlcoholicId,nonalcoholicname:nonalcoholic.NonAlcoholicName,price:nonalcoholic.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteNonAlcoholic(nonalcoholic.NonAlcoholicId)}>
            Delete
        </Button>

        <EditNonAlcoholicModal show={this.state.editModalShow}
        onHide={editModalClose}
        nonalcoholicid={nonalcoholicid}
        nonalcoholicname={nonalcoholicname}
        price={price}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Drink</Button>

                    <AddNonAlcoholicModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}



export class Tea extends Component{
    
    constructor(props){
        super(props);
        this.state={teas:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/tea')
        .then(response=>response.json())
        .then(data=>{
            this.setState({teas:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteTea(teaid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/tea/'+teaid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {teas, teaid,teaname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>TeaId</th>
                        <th>TeaName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teas.map(tea=>
                            <tr key={tea.TeaId}>
                                <td>{tea.TeaId}</td>
                                <td>{tea.TeaName}</td>
                                <td>{tea.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        teaid:tea.TeaId,teaname:tea.TeaName,price:tea.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteTea(tea.TeaId)}>
            Delete
        </Button>

        <EditTeaModal show={this.state.editModalShow}
        onHide={editModalClose}
        teaid={teaid}
        teaname={teaname}
        price={price}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Tea</Button>

                    <AddTeaModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}


  export class Coffee extends Component{
    
    constructor(props){
        super(props);
        this.state={coffees:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/coffee')
        .then(response=>response.json())
        .then(data=>{
            this.setState({coffees:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteCoffee(coffeeid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/coffee/'+coffeeid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {coffees, coffeeid,coffeename,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>CoffeeId</th>
                        <th>CoffeeName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coffees.map(coffee=>
                            <tr key={coffee.CoffeeId}>
                                <td>{coffee.CoffeeId}</td>
                                <td>{coffee.CoffeeName}</td>
                                <td>{coffee.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        coffeeid:coffee.CoffeeId,coffeename:coffee.CoffeeName,price:coffee.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteCoffee(coffee.CoffeeId)}>
            Delete
        </Button>

        <EditCoffeeModal show={this.state.editModalShow}
        onHide={editModalClose}
        coffeeid={coffeeid}
        coffeename={coffeename}
        price={price}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Coffe</Button>

                    <AddCoffeeModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}



export class OtherD extends Component{
    
    constructor(props){
        super(props);
        this.state={otherds:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/otherd')
        .then(response=>response.json())
        .then(data=>{
            this.setState({otherds:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteOtherD(otherdid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/otherd/'+otherdid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {otherds, otherdid,otherdname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>OtherDId</th>
                        <th>OtherDName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {otherds.map(otherd=>
                            <tr key={otherd.OtherDId}>
                                <td>{otherd.OtherDId}</td>
                                <td>{otherd.OtherDName}</td>
                                <td>{otherd.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        otherdid:otherd.OtherDId,otherdname:otherd.OtherDName,price:otherd.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteOtherD(otherd.OtherDId)}>
            Delete
        </Button>

        <EditOtherDModal show={this.state.editModalShow}
        onHide={editModalClose}
        otherdid={otherdid}
        otherdname={otherdname}
        price={price}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add OtherD Products</Button>

                    <AddOtherDModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}




export class Hod extends Component{

    constructor(props){
        super(props);
        this.state={hods:[]}
    }

    refreshList(){
        fetch('https://localhost:44365/api/hod')
        .then(response=>response.json())
        .then(data=>{
            this.setState({hods:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    delete(){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/hod',{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {hods}=this.state;

        return(
            <div >  <br/> <br/> 
                    <h4><center>History of order drinks</center> </h4>
                    < br></br>

                <Table className="mt-3" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th><center>Data</center></th>
                       
                    </tr>
                    </thead>
                    <tbody>
                        {hods.map(hod=>
                            <tr>
                                <td>{hod.name}</td>
                                <td>{hod.price} €</td>
                                <td><center>{hod.data}</center></td>
                                          
                       
                        
                            </tr>)}
                    </tbody> 
                   
                </Table>  
                 <br/>
                 <div><center>
                    <Button className=" btn btn-outline mr-2"  variant="danger" 
                             onClick={()=>this.delete()}>
                                 DELETE ALL HISTORY
                    </Button>
                    </center>
                    </div>              
            </div>
        )
    }
}

