import React from "react";
import graphic from "../assets/2.webp"
import { FaAmazon, FaAirbnb, FaApple, FaGooglePay } from "react-icons/fa";
const Home = () => {
    return (
        <>
            <div className="home" id= "homepage">
                <main>
                    <h1>Put your videos to work</h1>
                    <p>More engagement, more collaboration, more growth for your business</p>
                    <button>Check Here</button>
                </main>
            </div>
            <div className="home2">
                <img src={graphic} alt="graphic" />
                <div className="home2para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure, iste maiores corrupti laborum aspernatur consequuntur. Sequi deleniti, laudantium id nisi excepturi accusantium corrupti mollitia beatae, asperiores nesciunt quae minus?</p>
                </div>
            </div>
            <div className="about" id="about2">
                <main>
                    <h1>Who we are ? </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, facilis repudiandae autem nobis totam nam error voluptates qui iste provident doloribus ab tempora porro! Laboriosam accusantium, sint omnis ea beatae, tempora quia unde totam amet ipsum, dolore ut. Reprehenderit, commodi impedit facilis perferendis non cupiditate ipsum sit illum corrupti explicabo.</p>
                </main>
            </div>
            <div className="client" id="client">

                <main>
                    <h1>Client</h1>
                    <div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <FaAirbnb />
                            <h2>Airbnb</h2>
                        </div>
                        <div style={{ animationDelay: "0.8s" }}>
                            <FaAmazon />
                            <h2>Amazon</h2>
                        </div>
                        <div style={{ animationDelay: "0.75s" }}>
                            <FaApple />
                            <h2>Apple</h2>
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <FaGooglePay />
                            <h2>Google Pay </h2>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home;