import React from 'react'
import "../Pages/pages.css"

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="menu">
                                <div className="left">
                                    <h2>Event management app</h2>
                                </div>
                                <div className="right">
                                    <div className="btn">
                                        <button> <i class="fa-solid fa-plus"></i> Add Event</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <nav>
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="menu">
                                <ul>
                                    <li>today</li>
                                    <li>upcoming</li>
                                    <li>latest</li>
                                    <li>event type</li>
                                    <li>all events</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header