import { Link } from "react-router-dom";
import AllRoutes from "./AllRoutes";

function Navbar() {
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{ wordSpacing:"normal" ,display:"flex", justifyContent:"space-around", width:"60%"}} >
            <Link  to="/Business" >Business,EDU&GOV</Link>
            <Link to="/adorama" >Adorama</Link>
            <Link to="/printique" >Printique</Link>
            <Link to="/ourblog" >OurBlog</Link>
            </div>
            <div style={{width:"25%",  display:"flex", justifyContent:"space-around"}} >
            <Link to="/livecha" >Livechat</Link>
            <Link to="/help" >Help</Link>
            </div>
        </div>
    )
}

export default Navbar;

