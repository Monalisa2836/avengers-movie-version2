import PropTypes from "prop-types";

const Cart = ({ count, remaining, selectActors }) => {
  console.log(selectActors);
  return (
    <div className="w-1/3">
      <h2 className="text-2xl text-center font-bold">Cart here</h2>
      <div className="mt-20 space-y-5">
        <p className="text-xl text-center">
          Total Actor : {selectActors.length}
        </p>
        <p className="text-xl text-center">Remaining: ${remaining} </p>
        <p className="text-xl text-center">Total Cost : $ {count}</p>
        <div className="text-xl text-center">
          {selectActors.map((actor, index) => (
            <li key={index}>{actor.name}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectActors: PropTypes.array.isRequired,
  count: PropTypes.number,
  remaining: PropTypes.number,
};

export default Cart;
