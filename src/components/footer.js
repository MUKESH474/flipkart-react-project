import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import img1 from '../img/im2.png'
function Footer(){
    return(
        <div className="container-fluid footertop">
            <div className="row" >
                <div className="col-4 col-lg-4 col-md-2 col-sm-12  footerlogo">
                    <Link to={'/'}> <img src={img1} className="footerlogo"  /></Link>
                </div>
                <div className="col-4 col-lg-4 col-md-2 col-sm-12 " >
                    <h1 className="socila" >Social</h1>
                    <ul className="social mt-5">
                        <li ><Link to={'https://www.linkedin.com/in/mukesh-kumar-m74/'} className="linkedin " target="blank"><FaLinkedin /></Link></li>
                        <li><Link to={'https://github.com/MUKESH474'}target="blank" className="github " ><FaGithub  /></Link></li>
                        <li><Link to={'https://www.instagram.com/mukesh_muge/'} target="blank" className="insta" ><FaInstagram /></Link></li>
                        <li><Link to={'https://www.youtube.com/'} target="blank" className="youtube ">< FaYoutube/></Link></li>
                    </ul>  
                </div>
                <div className="col-4 col-lg-4 col-md-2 col-sm-12 addressfooter " >
                    <h1 className="address">Address</h1>
                    <p className="addpas">Vaishnavi Summit, Ground Floor,<br/>7th Main, 80 Feet Road, 3rd Block, Koramangala Industrial Layout,<br/> Bangalore – 560034, Karnataka, India</p>
                </div>
            </div>
            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                <p className="cright" ><FaRegCopyright/> 2007-2024 Flipkart.com</p>
            </div>
        </div>
    )
}
export default Footer;