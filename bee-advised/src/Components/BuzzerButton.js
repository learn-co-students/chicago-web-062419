import React from 'react'

const BuzzerButton = (props) => {
  console.log(props)
  return (
    <button id="buzzer-button" onClick={props.adviceFunction}>HIT THE BUZZER</button>
  );
}

export default BuzzerButton;
