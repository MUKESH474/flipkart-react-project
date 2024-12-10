import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { createSearchParams, useNavigate } from "react-router-dom";

function Electronics(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(responsive=>responsive.json())
        .then(result=>setdata(result))
        .catch((error)=>console.log(error))
    },[])
    const navigate=useNavigate()
    const navi =(ids)=>{
        console.log("see",ids);
        navigate({
            pathname: '/productdata',
            search: createSearchParams({id:ids}).toString(),
        })
    }
    return(
        <div >
            <h1 style={{marginTop:'20px'}}>Electronics</h1>
            {data ? (<ul className="elelist">{data.map((item)=>(<div key={item.id} >
                <div className="col-6">
                <Card style={{ width: '18rem' }} className="elerycard" >
                                <Card.Img variant="top" src={item.image} className="eleimage" />
                                <Card.Body className="elebody">
                                    <Card.Title className="elecardtile">{item.title}</Card.Title>
                                    <Card.Text className="elecardtext">Price :$ {item.price} </Card.Text>
                                    <Card.Text className="elecardtext">Ratings: {item.rating.rate}</Card.Text>
                                    <Card.Text className="elecardtext">Count :{item.rating.count}</Card.Text>
                                    <Button  className="elecardbutton" onClick={(event)=>navi(item.id)}>View Product</Button>
                                </Card.Body>
                            </Card>
                </div>
            </div>))}</ul>
            ):(<p>loading..</p>)}
            <hr/>
        </div>
    )
}
export default Electronics;