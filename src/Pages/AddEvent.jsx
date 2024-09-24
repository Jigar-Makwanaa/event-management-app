import React from 'react'
import Header from '../component/Header'

const AddEvent = () => {
    return (
        <>
            <Header />

            {/* add-event section start  */}
            <div className="add-event-section">
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="add-event">
                                <div className="form">
                                    <form action="">
                                        <div className="title">
                                            <input type="text" placeholder='Event Title' />
                                        </div>
                                        <div className="description">
                                            <input type="text" placeholder='Description' />
                                        </div>
                                        <div className="date">
                                            <input type="date" />
                                        </div>
                                        <div className="location">
                                            <input type="text" placeholder='Location' />
                                        </div>
                                        <div className="attendees">
                                            <input type="number" placeholder='Max attendees' />
                                        </div>

                                        <div className="btn">
                                            <button type='submit'>

                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* add-event section end */}
        </>
    )
}

export default AddEvent