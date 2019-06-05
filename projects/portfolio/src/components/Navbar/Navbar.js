import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
    //Track scroll positon of nav
    //when nav is at the top change position to fixed
    
    return(
        <nav className="flex desk fixed">
            <div className="link-wrap">
                <div className="page-link active">HOME</div>
                <div className="page-link">ABOUT</div>
                <div className="page-link">RESUME</div>
                <div className="page-link">CONTACT</div>
            </div> 
        </nav>
    )

}
export default Navbar