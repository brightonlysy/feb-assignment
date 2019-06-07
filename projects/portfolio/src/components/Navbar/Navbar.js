import React, { Component } from 'react'
import './Navbar.css'


// const sortByOption = {
//     'Home': 'home',
//     'About': 'about',
//     'Resume': 'resume',
//     'Contact': 'contact'
// }

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "#home",
            Home: 'home'
        }
    }
    //Track scroll positon of nav
    //when nav is at the top change position to fixed
    listenScrollEvent = e => {
        if (window.scrollY > 938) {
            this.setState({position: 'fixed'})
        } else {
            this.setState({position: ''})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }


    //make nav bar stay colored when in the section

    // handleChange(event) {
    //     this.setState({ home: event.target.value })
    // }

    // getSortByClass() {
    //     if (sortByOption === this.state.home) {
    //         return 'active'
    //     }
    //     return ''
    // }

    handleNavClick = (position) => {
        
    }

    render() {
        return(
            <nav className="flex fixed" style={{position: this.state.position}} >
                <div className="link-wrap">
                    <a onClick={() => this.handleNavClick("#home")} className={`page-link ${this.state.position === "#home" && "active"}`} dest="home" href="#home">HOME</a>
                    <a onClick={() => this.handleNavClick("#about")} className={`page-link ${this.state.position === "#about" && "active"}`} dest="about" href="#about">ABOUT</a>
                    <a onClick={() => this.handleNavClick("#resume")} className={`page-link ${this.state.position === "#resume" && "active"}`} dest="projects" href="#projects">PROJECTS</a>
                    <a onClick={() => this.handleNavClick("#contact")} className={`page-link ${this.state.position === "#contact" && "active"}`} dest="contact" href="#contact">CONTACT</a>
                </div> 
            </nav>
        )
    }
}
export default Navbar




