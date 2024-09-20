import React from 'react'
import Header from '../component/Header'

const EventType = () => {
    return (
        <>
            <Header />

            {/* event-type-section start  */}
            <div className="event-type-section">
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="box">
                                <div className="content">
                                    <div className="icon">
                                        <img src="../today.png" alt="" />
                                    </div>
                                    <div className="title">
                                        <h3>today</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="icon">
                                        <img src="../new.png" alt="" />
                                    </div>
                                    <div className="title">
                                        <h3>latest</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="icon">
                                        <img src="../upcoming.png" alt="" />
                                    </div>
                                    <div className="title">
                                        <h3>upcoming</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="icon">
                                        <img src="../event.png" alt="" />
                                    </div>
                                    <div className="title">
                                        <h3>all events</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* event-type-section end */}
        </>
    )
}

export default EventType