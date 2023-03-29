import { Route, Routes } from "react-router-dom"
import Adorama from "../Pages/Adoramarentals.jsx.jsx"
import Business from "../Pages/Business"
import Help from "../Pages/Help"
import Livechat from "../Pages/Livachat"
import OurBlog from "../Pages/OurBlog"
import Printique from "../Pages/Printique"
import Home from "../Pages/Home.jsx"

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/adorama" element={<Adorama />} />
                <Route path="/business" element={<Business />} />
                <Route path="/help" element={<Help />} />
                <Route path="/livechat" element={<Livechat />} />
                <Route path="/ourblog" element={<OurBlog />} />
                <Route path="/printique" element={<Printique />} />
            </Routes>
        </div>
    )
}
export default AllRoutes;