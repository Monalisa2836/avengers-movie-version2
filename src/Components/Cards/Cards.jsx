import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleSelectActors, handleRemoveActor }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="w-2/3">
      <h1 className="text-4xl text-center">Cards: {cards.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleSelectActors={handleSelectActors}
            handleRemoveActor={handleRemoveActor}
          ></Card>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  handleSelectActors: PropTypes.func,
  handleRemoveActor: PropTypes.func,
};

export default Cards;
