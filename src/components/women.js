import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { createSearchParams, useNavigate } from "react-router-dom";

function Women(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(res=>res.json())
        .then(ans=>setdata(ans))
        .catch(err=>console.log(err))
    },[])
    const navigate=useNavigate()
    const navi=(ids)=>{
        console.log("see",ids);
        navigate({
            pathname:'/productdata',
            search:createSearchParams({id:ids}).toString(),
        })
    }
    return(
        <div>
            <h1 style={{marginTop:'20px',marginBottom:'20px'}}>Women's Clothing</h1>
            <hr/>
            {data ? (<ul className="elelist"> {data.map((item)=>(<div key={item.id}>
                <div className="col-6">
                <Card style={{ width: '18rem' }} className="elerycard" >
                                <Card.Img variant="top" src={item.image} className="eleimage" />
                                <Card.Body className="elebody">
                                    <Card.Title className="elecardtile">{item.title}</Card.Title>
                                    <Card.Text className="elecardtext">Price :$ {item.price} </Card.Text>
                                    <Card.Text className="elecardtext">Ratings: {item.rating.rate}</Card.Text>
                                    <Card.Text className="elecardtext">Count :{item.rating.count}</Card.Text>
                                    <Button  className="elecardbutton" onClick={(event)=>navi(item.id)}>view product</Button>
                                </Card.Body>
                            </Card>
                </div>
            </div>))} </ul>):(<p>Loading</p>)}
            <hr/>
        </div>
    )
}
export default Women;