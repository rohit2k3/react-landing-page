import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {HashLink} from "react-router-hash-link"
const Header = () => {
    const [clickMenu,setClickMenu] = useState(false);
    console.log(clickMenu);
    return (
        <nav >
            <h1>Manymo</h1>
            < AiOutlineMenu style={{display: clickMenu ? "none":""}} className="nav-btn"  onClick={()=> setClickMenu(!clickMenu)}/>
            <AiOutlineClose className="nav-btn-close" style={{display: clickMenu ? "block":""}} onClick={()=> setClickMenu(!clickMenu)}/>
            <main style={{ height: clickMenu? "17rem":"0px"}}>
                <HashLink  to={"/#homepage"}>Home</HashLink>
                <hr style={{display: clickMenu? "block":"none"}} />
                <HashLink  to={"/contact"}>Contact us</HashLink>
                <hr style={{display: clickMenu? "block":"none"}} />
                <HashLink  to={"/#client"}>Client</HashLink>
                <hr style={{display: clickMenu? "block":"none"}} />
                <HashLink  to={"/#about2"}>About us</HashLink>
            </main>
        </nav>
    )
};

export default Header;