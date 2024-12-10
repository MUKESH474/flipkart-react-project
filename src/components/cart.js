import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react"
import Footer from "./footer"
import Header from "./header"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { createSearchParams, useNavigate } from 'react-router-dom';


function Cart(){
    const[data,setdata]=useState()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit=5")
        .then(res=>res.json())
        .then(ans=>setdata(ans))
        .catch(erre=>console.log(erre))
    },[])
    const navigate=useNavigate()
    const navi = (ids)=>{
        console.log("see",ids);
        navigate({
            pathname: "/productdata",
            search :createSearchParams({id:ids}).toString(),
        })
    }
    function removelist(id){
            const newsetdata=data.filter((l)=>l.id !== id)
            setdata(newsetdata);
    }
    return(
        <div>
            <Header/>
            <h1> Cart</h1>
            {data ? (<ul >{data.map((item)=>(<div key={item.id}>
                <Table striped bordered hover className='carttable'>
                    
                    <tbody>
                        <tr  >
                            <td className='carttid'>{item.id}</td>
                            <td className='carttimg'><img src={item.image} style={{width:'15px'}}/></td>
                            <td className='carttitille'>{item.title}</td>
                            <td className='carttrating'>Rating: {item.rating.rate}</td>
                            <td className='carttcount'> Count : {item.rating.count}</td>
                            <td className='carttprice'>${item.price}</td>
                            <td className='cartview'><Button variant="outline-warning" onClick={(event)=>navi(item.id)}>View</Button></td>
                            <td className='cartremove'><Button variant="outline-danger" onClick={()=>removelist(item.id)}>Remove</Button></td>
                        </tr>
                </tbody>
                    </Table>
            </div>))}</ul>):(<p>Loading...</p>)}
            <Footer/>
        </div>
    )
}
export default Cart