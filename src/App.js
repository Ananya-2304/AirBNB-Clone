import React from "react"
import Nav from "./components/Nav.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import style from "./index.css"
import data from "./data.js"

export default function App() {
  const cards = data.map((cardData) => {
    return <Card key = {cardData.id}
                 {...cardData}
            />
  })
  return (
    <div>
        <Nav />
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
    </div>
      
  )
//   <Card
//   img = "katie-zaferes.png"
//   rate = {5.0}
//   place = "(6) . USA"
//   desc = "Life lessons with Katie Zaferes"
//   cost = {136}
// />
}
