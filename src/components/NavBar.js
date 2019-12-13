import React from "react"
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-light" href="#" >Start Bootstrap</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default  NavBar