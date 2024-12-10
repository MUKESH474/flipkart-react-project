import { useEffect, useState } from 'react'
import women from '../img/women.png'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Sidenav(){
    const[data,setdata]=useState()
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/categories")
        .then(res=>res.json())
        .then(ans=>setdata(ans))
        .catch(error=>console.log(error))
    },[])
    return(
        <div>
            {data ? (<ul className='maincard'>{data.map((item,index)=>(<div key={index}>
                <div className='col-lg-2 col-md-2 col-2 me-5 mt-5 mx-5 my-5  col-sm-12' >
                    <Card style={{ width: '15rem' }} className='cardcm'>
                        <Link to={''}className='cardlink'>
                        
                        <Card.Body className='cardcolo4' >
                            <Card.Title >{item}</Card.Title>
                        </Card.Body>
                        </Link>
                    </Card>
                </div> 
            </div>))}</ul>):(<p>loading</p>)}
        </div>
    )
}
export default Sidenav