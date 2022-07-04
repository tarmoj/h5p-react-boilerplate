import React, {useState} from 'react';
import './Main.scss';

/**
 * A simple React functional component displaying simple demo UI.
 * @param {object} props React properties.
 */
export default function Main(props) {
  const [value, setValue] = useState(0);

  const takeRandom = () => {
    setValue( Math.floor(Math.random() * 100));
  };

  return (
    <div className={'h5p-react-question'}>
      <p className={'h5p-react-question-text'}>
        {props.question} <br /> Result: {value}
      </p>
      <button
        className={'h5p-react-question-button'}
        onClick={takeRandom}>Press</button
      >
    </div>
  );
}
