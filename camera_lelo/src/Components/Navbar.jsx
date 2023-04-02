import { Link } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { Stack, Input } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, ChevronDownIcon,Button} from '@chakra-ui/react'


function Navbar() {
    return (<div>

        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "rgb(0,65,132", color: "white" }}>
            <div style={{ wordSpacing: "normal", display: "flex", justifyContent: "space-between ", width: "60%", padding: "8px" }} >
                <Link to="/Business" >Business,EDU&GOV</Link>
                <Link to="/adorama" >Adorama</Link>
                <Link to="/printique" >Printique</Link>
                <Link to="/ourblog" >OurBlog</Link>
            </div>
            <div style={{ width: "25%", display: "flex", justifyContent: "space-around", padding: "8px" }} >
                <Link to="/livechat" >Livechat</Link>
                <Link to="/help" >Help</Link>
                <Link to="/form" >Admin</Link>
            </div>
        </div>


        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "rgb(0,60,120)" }}>
            <div style={{ wordSpacing: "normal", display: "flex", padding: "5px", justifyContent: "space-around", width: "30%", color: "white", fontSize: "60px" }} >
                <h1>Camera Lelo</h1>

            </div>
            <div style={{ width: "80%", padding: "20px", display: "flex", justifyContent: "space-around", color: "white", fontSize: "25px" }} >
                <Stack spacing={3}>
                    <Input style={{ width: '600px', height: "45px", borderRadius: "50px", marginInlineStart: "50px", backgroundColor: "white", padding: "10px", marginTop: "10px", color: "black" }} variant='filled' placeholder='Search here' />
                </Stack>
                <Link to="/login" >Sign in / My account</Link>
                <Link to="/cart" >Add to cart</Link>


            </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "rgb(0,65,132", color: "white" }}>
            <div style={{ wordSpacing: "normal", display: "flex", justifyContent: "space-between ", width: "60%", padding: "8px" }} >
                <Link to="/Business" >Business,EDU&GOV</Link>
                <Link to="/adorama" >Adorama</Link>
                <Link to="/printique" >Printique</Link>
                <Link to="/ourblog" >OurBlog</Link>
            </div>
            <div style={{ width: "25%", display: "flex", justifyContent: "space-around", padding: "8px" }} >
                <Link to="/livecha" >Livechat</Link>
                <Link to="/help" >Help</Link>
            </div>
        </div>
        <div>
        
        </div>



    </div >
    )
}

export default Navbar;

