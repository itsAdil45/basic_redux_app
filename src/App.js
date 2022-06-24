import React from "react";
import "./App.css"
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./actions";


export default function App() {
  const mystate = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return <div className="Container">

    <h1>React Redux Application</h1>
    <div>
      <a className="minus" title="minus" onClick={() => dispatch(decNumber())}>
        <span>-</span>
      </a>
      <input value={mystate} className="input" />
      <a className="plus" title="plus" onClick={() => dispatch(incNumber())}>
        <span>+</span>
      </a>
    </div>


  </div>;
}
