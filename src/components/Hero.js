import React from "react"

export default function Hero() {
    return (
        <section className = "hero">
            <div className = "heroImage">
                <img src = {require("../images/photo-grid.png")} className = "photoGrid" />
            </div>
            <h1 className = "heroHeading">Online Experiences</h1>
            <p className = "heroPara">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}