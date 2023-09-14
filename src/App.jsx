import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";

function App() {
  const [selectActors, setSelectedActors] = useState([]);
  const [count, setCount] = useState(0);
  const [remaining, setRemaining] = useState(30000);

  const handleSelectActors = (actor) => {
    const doesExist = selectActors.find((item) => item.id === actor.id);
    let count = actor.salary;
    if (doesExist) {
      return alert("It is already selected");
    }
    selectActors.forEach((item) => {
      count = count + item.salary;
    });
    if (count > 30000) {
      return alert("You do not have enough money");
    }
    setCount(count);
    const totalRemaining = 30000 - count;
    setRemaining(totalRemaining);
    setSelectedActors([...selectActors, actor]);
  };

  const handleRemoveActor = (id, salary) => {
    console.log("This will be deleted");
    const remainingSelectedActors = selectActors.filter(
      (actor) => actor.id !== id
    );
    setCount(count - salary);
    setRemaining(remaining + salary);
    setSelectedActors(remainingSelectedActors);
  };
  return (
    <>
      <div
        className="flex mt-4 text-white bg-gradient-to-b from-transparent to-black via-black bg-fixed bg-cover"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://i.ibb.co/JB1y0X5/4690.jpg")',
        }}
      >
        <Cards
          handleSelectActors={handleSelectActors}
          handleRemoveActor={handleRemoveActor}
        ></Cards>
        <Cart
          count={count}
          remaining={remaining}
          selectActors={selectActors}
        ></Cart>
      </div>
    </>
  );
}

export default App;
