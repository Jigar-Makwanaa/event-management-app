import React from 'react'
import Header from './Header'

const Home = () => {
return (
<>
    <Header />

    {/* event-section start */}

    <div className="event-section">
        <div className="container">
            <div className="row">
                <div className="main">
                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaDKc-Roh927WDkANcbA9im-qh7k2jMIn5kghk1E71hxJpU0FCQyOaYitu_cmfIwN2wI&usqp=CAU"
                                    alt="" />
                            </div>
                            <div className="details">
                                <h3>event title</h3>
                                <h4>date</h4>
                                <span>localtion</span>
                                <h4>attendees persone</h4>
                                <p>description</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaDKc-Roh927WDkANcbA9im-qh7k2jMIn5kghk1E71hxJpU0FCQyOaYitu_cmfIwN2wI&usqp=CAU"
                                    alt="" />
                            </div>
                            <div className="details">
                                <h3>event title</h3>
                                <h4>date</h4>
                                <span>localtion</span>
                                <h4>attendees persone</h4>
                                <p>description</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvoAoZfKSxCiemK_R-7KkmAusgzpR-y4oG5In3w1AG_74fzaVWfHswuJMEUeQN2KAD8sU&usqp=CAU"
                                    alt="" />
                            </div>
                            <div className="details">
                                <h3>event title</h3>
                                <h4>date</h4>
                                <span>localtion</span>
                                <h4>attendees persone</h4>
                                <p>description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* event-section end */}

</>
)
}

export default Home