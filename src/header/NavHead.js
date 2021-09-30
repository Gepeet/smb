import React from 'react'
import './nav.css'

function NavHead() {
    return (
        <div>
            
                <nav>
                    <h1>LOGO</h1>
                    <h3>PRODUCTS</h3>
                </nav>
                <div className="linkdiv">
                    <h1>OUR BEERS</h1>
                    <ul>
                        <li className="active">ALL PRODUCTS</li>
                        <li>GRAFTERS</li>
                        <li>MCGARGLES</li>
                        <li>RYE RIVER SEASONAL</li>
                        <li>SOLAS</li>
                    </ul>
                </div>
            
        </div>
    )
}

export default NavHead
