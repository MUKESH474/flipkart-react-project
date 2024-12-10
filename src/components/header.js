import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { IoSearchOutline } from "react-icons/io5";
import img1 from '../img/im1.png'
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { GrUserNew } from "react-icons/gr";

function Header(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary headnavbar mb-5 "  >
        <Container fluid className='row-12' >
            <Form className="d-flex " style={{width:'100%'}}>
            <Navbar.Brand href="#" className='ms-3 ' > <Link to={'/'} className='navimg' > <img src={img1}  /></Link> </Navbar.Brand>
                <Form.Control type="search"
                placeholder="Search"
                className="ms-5 me-5 ps-5 search"
                style={{width:'80%', borderRadius:'10px'}}
                aria-label="Search"/>
                <IoSearchOutline  className='searchlogo ' aria-hidden='true'/>
                <Button  className='ms-5 d-flex siginbutton '  > <Link to={'/signin'} className='signin'>Signin</Link> <FaUser className='siginlogo' /></Button>
                <Button  className='ms-5 me-5 d-flex sigoutbutton '> <Link to={'/signout'} className='signout' >Signup</Link> < GrUserNew className='siguplogo'/> </Button>
                <Button  className='ms-5 me-5 cartbutton d-flex'> <Link to={'/cart'} className='cart' >Cart</Link> <TiShoppingCart className='cartlogo ' /></Button>
            </Form>
        </Container>
    </Navbar>
    )
}
export default Header