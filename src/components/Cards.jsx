import { useState } from "react"
import '../styles/Cards.scss'
import CardsJSON from '../assets/logements.json'

const Cards = () => {
  const [cardsData] = useState(CardsJSON);

    return (
        <div className="cards_container">
        {cardsData.map((card) => (
          <div className="card" key={card.id}>
            <div
            className="card_image"
            style={{
                backgroundImage: `url(${card.cover})`
            }}>
                <div className="card_title">{card.title}</div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Cards