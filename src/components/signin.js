import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Footer from "./footer";
import Header from "./header";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Signin(){
    return(
        <div>
            
            <Header/>
            <div className='container signinform'>
                <div className='row ' >
                    <div className='col signintop'>
                        <h1 style={{color:'blue'}}>Signin</h1>
                        <div className='col-4'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3 emailid">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        </div>
                        <div className='col-4'>
                        <FloatingLabel controlId="floatingPassword" label="Password" className='signinpassword'>
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        </div>
                        <p className='signininfo mt-5'>New to Flipkart ? <Link to={'/signout'} className='signinacc'>Create an acount</Link> </p>
                        <Button variant="outline-success signinbutton">Signin</Button>
                    </div>
                </div>
            </div><hr/>
            <Footer/>
        </div>
    )
}
export default Signin;