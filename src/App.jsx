import { useState } from "react";

function App() {
  const [counter, setCounter] = useState([0]);
  const addCounter = () => {
    let item = counter[counter.length - 1];
    counter.push(item);
    setCounter([...counter]);
  };
  const increaseCount = (index) => {
    counter[index] += 1;
    setCounter([...counter]);
  };
  const decreaseCount = (index) => {
    counter[index] -= 1;
    setCounter([...counter]);
  };

  const [active, setActive] = useState(false);

  const [metr, setMetr] = useState(0);
  const [qadamKattaligi, setQadamKattaligi] = useState(1);

  const yurish = () => {
    setMetr(metr + qadamKattaligi);
  };

  const oshirish = () => {
    setQadamKattaligi(qadamKattaligi + 1);
  };

  return (
    <>
      {/* task- 3 */}
      <button className="btn" onClick={addCounter}>
        add counter
      </button>

      {counter?.map((item, index) => {
        return (
          <div key={index} className="button-wrapper">
            <button className="btn" onClick={() => increaseCount(index)}>
              +
            </button>
            <span>{item}</span>
            <button className="btn" onClick={() => decreaseCount(index)}>
              -
            </button>
          </div>
        );
      })}
      {/* task -3 */}
      {/* task -2 */}
      {active ? <h1>Login</h1> : <h1>Welcome</h1>}
      <button onClick={() => setActive(!active)}>
        {active ? "Login" : "Logout"}
      </button>
      {/* task -2 */}
      {/* task -1  */}
      <p>{metr} metr</p>
      <button onClick={yurish}>Yurish</button>
      <p>Qadam kattaligi: {qadamKattaligi}</p>
      <button onClick={oshirish}>Qadam uzunligi</button>
      {/* task -1 */}
    </>
  );
}
export default App;
