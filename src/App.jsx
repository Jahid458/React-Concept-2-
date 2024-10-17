import "./App.css";
import Counter from "./Counter";
import Freinds from "./Freinds";
import Team from "./Team";
import Users from "./Users";


function App() {
  function bundleClick() {
    alert("button clicked!");
  }

  const handleClick2 = () => {
    alert("button clicked 2");
  };

  const addtoFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Freinds></Freinds>
     <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={bundleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert("third clicked!");}} >
        third
      </button>
      {/* addtoFive(3) eibabe dile alert sathe sathe call kora jai tai tokon () ⇒ {} er moddhe arrow function kaj korte hoi karon alada function diye wrap kore dichi  */}
      <button onClick={() => addtoFive(3)}>Four</button>
    </>
  );
}

export default App;
