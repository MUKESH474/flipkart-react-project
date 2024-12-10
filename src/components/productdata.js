import { useEffect, useState } from "react"
import Footer from "./footer"
import Header from "./header"
import Button from 'react-bootstrap/Button';
import { useNavigate,useLocation, Link, NavLink } from "react-router-dom";

function Productdata(){
    const[data,setdata]=useState([])
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    // console.log("sssss",id)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(ans=>setdata(ans))
        .catch(error=>console.log(error))
    },[])
    const nav=useNavigate()
    
    return(
        
        <div>
            <Header/>
            <div className="container-fluid">
                <>
                <div className="row" >
                <h1 className="productdatatitle">Product Detail</h1>
                    <div className="col-5">
                        <img src={data.image} className="productdataimage"/>
                    </div>
                    <div className="col-7">
                        <h2 style={{marginTop:'60px'}}>{data.title}</h2>
                        <h6 style={{marginTop:'40px'}}><b>Price: ${data.price}</b></h6>
                        <p style={{marginTop:'50px'}}>Rating:{data.rating && data.rating.rate}</p>
                        <p style={{marginTop:'10px'}}>Count:{data.rating && data.rating.count}</p>
                        <p style={{marginTop:'40px'}}>{data.description}</p>
                        <Button className="mt-4" variant="outline-warning" onClick={()=>{nav("/cart")}} >Add</Button>
                        <NavLink to={"/cart"} className="btn btn-dark ms-5 mt-4" > Go to cart</NavLink>
                    </div>
                </div>
                </>
            </div> <hr/>
            <Footer/>
        </div>
    )
}
export default Productdata