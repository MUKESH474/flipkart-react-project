import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Content from "./content";
import Electronics from "./electronics";
import Jewelery from "./jewelery";
import Men from "./men";
import Women from "./women";
import Signin from "./signin";
import Signout from "./signout";
import Productdata from "./productdata";
import Cart from "./cart";

function Router1(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Content/>}/>
                    <Route path="/electronics" element={<Electronics/>} />
                    <Route path="/jewelery" element={<Jewelery/>} />
                    <Route path="/mens" element={<Men/>} />
                    <Route path="/womens" element={<Women/>} />
                </Route>
                <Route path="/signin" element={<Signin/>} />
                <Route path="/signout" element={<Signout/>} />
                <Route path="/productdata" element={<Productdata/>}/>
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router1;