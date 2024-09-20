import React from 'react'
import Header from './Header'
import '../Pages/pages.css'

const Home = () => {
    return (
        <>
            <Header />

            {/* home-section start  */}
            <div className="home-section">
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="title">
                                <h2>InviFit</h2>

                                <p>fitness event management app</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home-section end */}

        </>
    )
}

export default Home