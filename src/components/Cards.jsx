import { useState, useEffect } from "react"
import '../styles/Cards.scss'

const Cards = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        fetch('/logements.json')
        .then((response) => response.json())
        .then((data) => setCardsData(data))
        .catch((error) => console.error("Erreur de récupération des données :", error));
    },[]);

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