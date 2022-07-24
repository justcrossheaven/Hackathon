import React from "react"
import pic from "../../img/home_page_dog.png";

export default function HomePage() {
    return (
        <div className="home-canvas">
            <p className="home-title">Typing Tom</p>
            <img className="home-page-dog"src={pic} alt="cute_dog_barking"/>
            <button className="home-sign">Sign In</button>
        </div>
    )
}