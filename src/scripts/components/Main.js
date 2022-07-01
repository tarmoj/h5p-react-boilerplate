import React, {useState} from 'react';

/**
 * A simple React functional component displaying simple demo UI
 */
export default function Main( props ) {
  const [value, setValue] = useState(0);

  const takeRandom = () => {
    setValue( Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <p>{props.question} <br /> Result: {value}</p>
      <button onClick={takeRandom}>Press</button>
    </div>
  );
}
