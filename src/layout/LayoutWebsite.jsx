import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/website/Footer";
import Header from "../pages/website/Header";
import HeaderSort from "../pages/website/HeaderSort";

function LayoutWebsite(props) {
    return (
        <div>
            
            <Header search={props.handleSearch} product={props.search}  cart={props.cart}/>
            <HeaderSort />
            <Outlet />
            <Footer />
        </div>
    );
}
export default LayoutWebsite;