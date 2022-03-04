import { useState } from "react";

const Greet = ({ who, onHiFive }) => {
  const handleClick = () => {
    return onHiFive(who);
  };

  return (
    <div>
      Hello {who} <button onClick={handleClick}>🖐</button>
    </div>
  );
};

export default function IndexPage() {
  const [clickedName, setClickedName] = useState("senki");

  const handleHiFive = (who) => {
    setClickedName(who);
  };

  return (
    <div>
      <Greet who="Lajos" onHiFive={handleHiFive} />
      <Greet who="day" onHiFive={handleHiFive} />
      <p>{clickedName}</p>
    </div>
  );
}
