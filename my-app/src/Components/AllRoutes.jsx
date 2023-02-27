import { Routes, Route } from "react-router-dom";
import Women from "../Pages/Women"
import Men from "../Pages/Men"
import Kids from "../Pages/Kids"
import Home from "../Pages/Home"
import SingleLanding from "../Pages/SingleLanding.jsx"
import SingleWomen from "../Pages/SingleWomen.jsx"
import SingleMen from "../Pages/SingleMen"
import SingleKid from "../Pages/SingleKid"
import Cart from "../Pages/Cart"
import OrderPlace from "../Pages/OrderPlace";
import PaymentPage from "../Pages/PaymentPage";
import PaymentSuccess from "../Pages/PaymentSuccess";

function AllRoutes(){
    return(
        <Routes>

            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/women" element = {<Women/>}></Route>
            <Route path = "/men" element = {<Men/>}></Route>
            <Route path = "/kids" element = {<Kids/>}></Route>
            <Route path = "/cart" element = {<Cart/>}></Route>
            <Route path = "/orderplace" element = {<OrderPlace/>}></Route>
            <Route path = "/payment" element = {<PaymentPage/>}></Route>
            <Route path = "/paymentsuccess" element = {<PaymentSuccess/>}></Route>


            {/* <Route path = "/mens/:userId" element = {<SingleProduct/>}></Route>
            <Route path = "/women/:userId" element = {<SingleProduct/>}></Route>
            <Route path = "/kids/:userId" element = {<SingleProduct/>}></Route> */}
            <Route path = "//:user_id" element = {<SingleLanding/>}></Route>
            <Route path = "/women/:user_id" element = {<SingleWomen/>}></Route>
            <Route path = "/men/:user_id" element = {<SingleMen/>}></Route>
            <Route path = "/kids/:user_id" element = {<SingleKid/>}></Route>
            
        </Routes>
    )
}

export default AllRoutes;

