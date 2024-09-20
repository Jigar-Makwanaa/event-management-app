import React from 'react'
import "../Pages/pages.css"
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="logo">
                                <Link to={'/'}><i class="fa-solid fa-house"></i></Link>
                            </div>
                            <div className="menu">
                                <div className="create-eve">
                                    <Link to={'/addEvent'}><button>create event</button></Link>
                                </div>
                                <div className="event-type">
                                    <Link to={'/eventType'}><button>event type</button></Link>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header