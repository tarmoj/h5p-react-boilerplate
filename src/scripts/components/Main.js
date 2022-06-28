import React, {useEffect, useState} from "react";

/**
 * A simple React functional component displaying the voting user interface
 */
export default function Main( props ) {
  const [value, setValue] = useState(0);

  const takeRandom = () => {setValue( Math.floor(Math.random()*100)  )}

  return (
    <div>
      <p>Väli: {props.field} <br /> Väärtus on: {value}</p>
      <button onClick={takeRandom}>Vajuta</button>
    </div>
  );
}
