<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
// import { render } from "react-dom";
import App from "./AppZ";

// render(<App />, document.getElementById("root"));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 48ff1564978f3e43c4a3b39d29b4885537f0bc1d
