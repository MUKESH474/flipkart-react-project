import 'bootstrap/dist/css/bootstrap.min.css'
import ele from '../img/ele.jpg'
import jew from '../img/jew.jpg'
import men from '../img/men.png'
import women from '../img/women.png'
import Card from 'react-bootstrap/Card';
import { createSearchParams, Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import floa2 from '../img/floa20.png'
import floa3 from '../img/floa30.png'
import floa1 from '../img/floa10.png'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidenav from './content1'


function Content(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(ans=>setdata(ans))
        .catch(error=>console.log(error))
    },[])
    const navigate=useNavigate()
    const navi=(ids)=>{
        console.log("see,ids")
        navigate({
            pathname:'/productdata',
            search:createSearchParams({id:ids}).toString(),
        })
    }
    return(
        <div className='container-fluid'>
            <div className='row'>
                
                <div className='col-12 col-lg-12 col-md-12 col-sm-12 mt-5  slidertop' >
                <Carousel>
                    <Carousel.Item>
                        <Link to={'/electronics'}> <img src={floa1} className='floaimg'/></Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to={'/womens'} ><img src={floa2}  className='floaimg'/></Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to={'/mens'}> <img src={floa3} className='floaimg' /></Link>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
            <hr/>
            {/* <Sidenav/> */}
            <div className='d-flex row concard'  >
                <div className='col-lg-2 col-md-2  col-2 me-5 mt-5 mx-5 my-5 col-sm-12' >
                    <Card style={{ width: '20rem' }} className='cardc'>
                        <Link to={'/electronics'} className='cardlink'>
                        <Card.Img variant="top" src={ele} />
                        <Card.Body className='cardcolo1' >
                            <Card.Title >Electronics</Card.Title>
                        </Card.Body>
                        </Link>
                    </Card>
                </div>
                <div className='col-lg-2 col-md-2  col-2 me-5 mt-5 mx-5 my-5 col-sm-12' >
                    <Card style={{ width: '20rem' }} className='cardc'>
                        <Link to={'/jewelery'} className='cardlink'>
                        <Card.Img variant="top" src={jew} />
                        <Card.Body className='cardcolo2' >
                            <Card.Title >Jewelery</Card.Title>
                        </Card.Body>
                        </Link>
                    </Card>
                </div>
                <div className='col-lg-2 col-md-2 col-2 me-5 mt-5 mx-5 my-5 col-sm-12' >
                    <Card style={{ width: '20rem' }} className='cardc'>
                        <Link to={'/mens' } className='cardlink'>
                        <Card.Img variant="top" src={men} width={'500px'} height={'220px'}/>
                        <Card.Body className='cardcolo3' >
                            <Card.Title >Men's Clothing</Card.Title>
                        </Card.Body>
                        </Link>
                    </Card>
                </div>
                
                <div className='col-lg-2 col-md-2 col-2 me-5 mt-5 mx-5 my-5  col-sm-12' >
                    <Card style={{ width: '20rem' }} className='cardc'>
                        <Link to={'/womens'}className='cardlink'>
                        <Card.Img variant="top" src={women} />
                        <Card.Body className='cardcolo4' >
                            <Card.Title >Women's Clothing</Card.Title>
                        </Card.Body>
                        </Link>
                    </Card>
                </div> 
                <hr/>               
                <h1>All Products</h1>
                <hr/>

                {data ? (<ul className="elelist"> {data.map((item)=>(<div key={item.id}>
                    <div className="col-6">
                <Card style={{ width: '18rem', marginBottom:'40px'}} className="elerycard" >
                                <Card.Img variant="top" src={item.image} className="eleimage" />
                                <Card.Body className="elebody">
                                    <Card.Title className="elecardtile">{item.title}</Card.Title>
                                    <Card.Text className="elecardtext">Price :$ {item.price} </Card.Text>
                                    <Card.Text className="elecardtext">Ratings: {item.rating.rate}</Card.Text>
                                    <Card.Text className="elecardtext">Count :{item.rating.count}</Card.Text>
                                    <Button  className="elecardbutton" onClick={(event)=>{navi(item.id)}}>View Product</Button>
                                </Card.Body>
                            </Card>
                </div>
                </div>))} </ul>):(<p>Loading</p>)}
            </div>
            <hr/>
        </div>
    )
}
export default Content;