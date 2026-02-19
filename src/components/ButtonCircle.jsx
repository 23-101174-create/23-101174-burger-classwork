import React, { Component } from 'react';
import "./ButtonCircle.css"
import { useState } from "react";

const ButtonCircle = () => {
const [count, setCount] = useState(0);

const Increase = () => {
  setCount(count + 1);
};

const Decrease = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};

return (<>
<div className='container'>
    <button className='button' onClick={Decrease}>-</button>
    <h2 className='countnumber'>{count}</h2>
    <button className='button' onClick={Increase}>+</button>
    </div>
  </>);
};
 
export default ButtonCircle ;