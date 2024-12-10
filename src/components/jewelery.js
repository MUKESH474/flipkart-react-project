import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { createSearchParams, useNavigate } from "react-router-dom";
function Jewelery(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(res=>res.json())
        .then(ans=>setdata(ans))
        .catch(error=>console.log(error))
    },[])
    const navigate= useNavigate()
    const navi = (ids) =>{
       // const ids = data.map(value => value.id);
        console.log("see",ids);

        navigate({
            pathname: '/productdata',
            search: createSearchParams({id:ids}).toString(),
        });
    }
    
    return(
        <div>
            <h1></h1>Jewelery <hr/>
            {data?(<ul className="jewelerylist"> {data.map((item)=>(<div key={item.id}> 
                <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                            <Card style={{ width: '18rem' }} className="mencard" >
                                <Card.Img variant="top" src={item.image} className="manimage" />
                                <Card.Body>
                                    <Card.Title className="jewelerycardtile">{item.title}</Card.Title>
                                    <Card.Text className="jewelerycardtext">Price:$ {item.price} </Card.Text>
                                    <Card.Text className="jewelerycardtext">Ratings: {item.rating.rate}</Card.Text>
                                    <Card.Text className="jewelerycardtext">Count :{item.rating.count}</Card.Text>
                                    <Button  className="jewelerycardbutton" onClick={(event) => navi(item.id)} >View Product</Button>
                                </Card.Body>
                            </Card>
                            </div>
                        </div>
                    </div>
            </div>))} </ul>):(<p>loading</p>)}
                    <hr/>
        </div>
    )
}
export default Jewelery;