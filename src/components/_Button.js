import React from 'react';

const Button = (props) => (
  <button onClick={props.clickHandler}>{props.buttonDisplayName}</button>
);

export default Button;
