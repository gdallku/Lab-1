import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddOtherModal} from './AddOtherModal';
import {EditOtherModal} from './EditOtherModal';
import {AddChineseFoodsModal} from './AddChineseFoodsModal';
import {EditChineseFoodsModal} from './EditChineseFoodsModal';
import {AddItalianFoodsModal} from './AddItalianFoodsModal';
import {EditItalianFoodsModal} from './EditItalianFoodsModal';
import {AddDessertsModal} from './AddDessertsModal';
import {EditDessertsModal} from './EditDessertsModal';
import {AddSaladsModal} from './AddSaladsModal';
import {EditSaladsModal} from './EditSaladsModal';
import {AddTradicionalModal} from './AddTradicionalModal';
import {EditTradicionalModal} from './EditTradicionalModal';
import {AddSeaFoodsModal} from './AddSeaFoodsModal';
import {EditSeaFoodsModal} from './EditSeaFoodsModal';
import {AddFastFoodModal} from './AddFastFoodModal';
import {EditFastFoodModal} from './EditFastFoodModal';

  
  export class Other extends Component{
    
    constructor(props){
        super(props);
        this.state={others:[], addModalShow:false, editModalShow:false}
    }
     
  
    refreshList(){
        fetch('https://localhost:44365/api/other')
        .then(response=>response.json())
        .then(data=>{
            this.setState({others:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteOther(otherid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/other/'+otherid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {others, otherid,othername,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>OtherId</th>
                        <th>OtherName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {others.map(other=>
                            <tr key={other.OtherId}>
                                <td>{other.OtherId}</td>
                                <td>{other.OtherName}</td>
                                <td>{other.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        otherid:other.OtherId,othername:other.OtherName,price:other.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteOther(other.OtherId)}>
            Delete
        </Button>

        <EditOtherModal show={this.state.editModalShow}
        onHide={editModalClose}
        otherid={otherid}
        othername={othername}
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
                    Add Other Products</Button>

                    <AddOtherModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}


export class Hof extends Component{

    constructor(props){
        super(props);
        this.state={hofs:[]}
    }

    refreshList(){
        fetch('https://localhost:44365/api/hof')
        .then(response=>response.json())
        .then(data=>{
            this.setState({hofs:data});
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
            fetch('https://localhost:44365/api/hof',{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {hofs}=this.state;

        return(
            <div >  <br/> <br/> 
                    <h4><center>History of order foods</center> </h4>
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
                        {hofs.map(tof=>
                            <tr>
                                <td>{tof.name}</td>
                                <td>{tof.price} €</td>
                                <td><center>{tof.data}</center></td>
                                          
                       
                        
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


export class ChineseFoods extends Component{
    
    constructor(props){
        super(props);
        this.state={chinesefoodss:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/chinesefoods')
        .then(response=>response.json())
        .then(data=>{
            this.setState({chinesefoodss:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteChineseFoods(chinesefoodsid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/chinesefoods/'+chinesefoodsid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {chinesefoodss, chinesefoodsid,chinesefoodsname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>ChineseFoodsId</th>
                        <th>ChineseFoodsName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chinesefoodss.map(chinesefoods=>
                            <tr key={chinesefoods.ChineseFoodsId}>
                                <td>{chinesefoods.ChineseFoodsId}</td>
                                <td>{chinesefoods.ChineseFoodsName}</td>
                                <td>{chinesefoods.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        chinesefoodsid:chinesefoods.ChineseFoodsId,chinesefoodsname:chinesefoods.ChineseFoodsName,price:chinesefoods.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteChineseFoods(chinesefoods.ChineseFoodsId)}>
            Delete
        </Button>

        <EditChineseFoodsModal show={this.state.editModalShow}
        onHide={editModalClose}
        chinesefoodsid={chinesefoodsid}
        chinesefoodsname={chinesefoodsname}
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
                    Add Food</Button>

                    <AddChineseFoodsModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}

export class Tradicional extends Component{
    
    constructor(props){
        super(props);
        this.state={tradicionals:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/tradicional')
        .then(response=>response.json())
        .then(data=>{
            this.setState({tradicionals:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteTradicional(tradicionalid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/tradicional/'+tradicionalid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {tradicionals, tradicionalid,tradicionalname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>TradicionalId</th>
                        <th>TradicionalName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tradicionals.map(tradicional=>
                            <tr key={tradicional.TradicionalId}>
                                <td>{tradicional.TradicionalId}</td>
                                <td>{tradicional.TradicionalName}</td>
                                <td>{tradicional.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        tradicionalid:tradicional.TradicionalId,tradicionalname:tradicional.TradicionalName,price:tradicional.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteTradicional(tradicional.TradicionalId)}>
            Delete
        </Button>

        <EditTradicionalModal show={this.state.editModalShow}
        onHide={editModalClose}
        tradicionalid={tradicionalid}
        tradicionalname={tradicionalname}
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
                    Add Food</Button>

                    <AddTradicionalModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}



export class ItalianFoods extends Component{
    
    constructor(props){
        super(props);
        this.state={italianfoodss:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/italianfoods')
        .then(response=>response.json())
        .then(data=>{
            this.setState({italianfoodss:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteItalianFoods(italianfoodsid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/italianfoods/'+italianfoodsid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {italianfoodss, italianfoodsid,italianfoodsname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>ItalianFoodsId</th>
                        <th>ItalianFoodsName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {italianfoodss.map(italianfoods=>
                            <tr key={italianfoods.ItalianFoodsId}>
                                <td>{italianfoods.ItalianFoodsId}</td>
                                <td>{italianfoods.ItalianFoodsName}</td>
                                <td>{italianfoods.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        italianfoodsid:italianfoods.ItalianFoodsId,italianfoodsname:italianfoods.ItalianFoodsName,price:italianfoods.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteItalianFoods(italianfoods.ItalianFoodsId)}>
            Delete
        </Button>

        <EditItalianFoodsModal show={this.state.editModalShow}
        onHide={editModalClose}
        italianfoodsid={italianfoodsid}
        italianfoodsname={italianfoodsname}
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
                    Add Food</Button>

                    <AddItalianFoodsModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}


  export class SeaFoods extends Component{
    
    constructor(props){
        super(props);
        this.state={seafoodss:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/seafoods')
        .then(response=>response.json())
        .then(data=>{
            this.setState({seafoodss:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteSeaFoods(seafoodsid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/seafoods/'+seafoodsid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {seafoodss, seafoodsid,seafoodsname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>SeaFoodsId</th>
                        <th>SeaFoodsName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seafoodss.map(seafoods=>
                            <tr key={seafoods.SeaFoodsId}>
                                <td>{seafoods.SeaFoodsId}</td>
                                <td>{seafoods.SeaFoodsName}</td>
                                <td>{seafoods.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        seafoodsid:seafoods.SeaFoodsId,seafoodsname:seafoods.SeaFoodsName,price:seafoods.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteSeaFoods(seafoods.SeaFoodsId)}>
            Delete
        </Button>

        <EditSeaFoodsModal show={this.state.editModalShow}
        onHide={editModalClose}
        seafoodsid={seafoodsid}
        seafoodsname={seafoodsname}
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
                    Add Food</Button>

                    <AddSeaFoodsModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}

export class Salads extends Component{
    
    constructor(props){
        super(props);
        this.state={saladss:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/salads')
        .then(response=>response.json())
        .then(data=>{
            this.setState({saladss:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteSalads(saladsid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/salads/'+saladsid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {saladss, saladsid,saladsname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>SaladsId</th>
                        <th>SaladsName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {saladss.map(salads=>
                            <tr key={salads.SaladsId}>
                                <td>{salads.SaladsId}</td>
                                <td>{salads.SaladsName}</td>
                                <td>{salads.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        saladsid:salads.SaladsId,saladsname:salads.SaladsName,price:salads.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteSalads(salads.SaladsId)}>
            Delete
        </Button>

        <EditSaladsModal show={this.state.editModalShow}
        onHide={editModalClose}
        saladsid={saladsid}
        saladsname={saladsname}
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
                    Add Salads</Button>

                    <AddSaladsModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}

export class Desserts extends Component{
    
    constructor(props){
        super(props);
        this.state={dessertss:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/desserts')
        .then(response=>response.json())
        .then(data=>{
            this.setState({dessertss:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDesserts(dessertsid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/desserts/'+dessertsid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {dessertss, dessertsid,dessertsname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>DessertsId</th>
                        <th>DessertsName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dessertss.map(desserts=>
                            <tr key={desserts.DessertsId}>
                                <td>{desserts.DessertsId}</td>
                                <td>{desserts.DessertsName}</td>
                                <td>{desserts.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        dessertsid:desserts.DessertsId,dessertsname:desserts.DessertsName,price:desserts.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteDesserts(desserts.DessertsId)}>
            Delete
        </Button>

        <EditDessertsModal show={this.state.editModalShow}
        onHide={editModalClose}
        dessertsid={dessertsid}
        dessertsname={dessertsname}
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
                    Add Food</Button>

                    <AddDessertsModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}

export class FastFood extends Component{
    
    constructor(props){
        super(props);
        this.state={fastfoods:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:44365/api/fastfood')
        .then(response=>response.json())
        .then(data=>{
            this.setState({fastfoods:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteFastFood(fastfoodid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44365/api/fastfood/'+fastfoodid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {fastfoods, fastfoodid,fastfoodname,price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                                < br></br>

                <Table className="mt-4" striped bordered hover size="sm" className="big-screen" variant="dark">
                    <thead>
                        <tr>
                        <th>FastFoodId</th>
                        <th>FastFoodName</th>
                        <th>Price</th> 
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fastfoods.map(fastfood=>
                            <tr key={fastfood.FastFoodId}>
                                <td>{fastfood.FastFoodId}</td>
                                <td>{fastfood.FastFoodName}</td>
                                <td>{fastfood.Price} €</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        fastfoodid:fastfood.FastFoodId,fastfoodname:fastfood.FastFoodName,price:fastfood.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteFastFood(fastfood.FastFoodId)}>
            Delete
        </Button>

        <EditFastFoodModal show={this.state.editModalShow}
        onHide={editModalClose}
        fastfoodid={fastfoodid}
        fastfoodname={fastfoodname}
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
                    Add Food</Button>

                    <AddFastFoodModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}
