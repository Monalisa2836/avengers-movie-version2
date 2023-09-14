import PropTypes from "prop-types";

const Card = ({ card, handleSelectActors, handleRemoveActor }) => {
  const { name, age, image, salary, id } = card;
  return (
    <div className="card md:m-20  border-2 shadow-xl ">
      <div className="card-body">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full">
            <img src={image} />
          </div>
        </div>
        <h2 className="text-center text-xl font-bold ">{name}</h2>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          consequatur!
        </p>
        <div className="flex justify-between">
          <p>Salary: ${salary}</p>
          <p>Age: {age}</p>
        </div>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleSelectActors(card)}
            className="btn btn-outline btn-accent"
          >
            Select
          </button>
          <button
            onClick={() => handleRemoveActor(id, salary)}
            className="btn btn-outline btn-accent"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleSelectActors: PropTypes.func,
  handleRemoveActor: PropTypes.func,
};

export default Card;
