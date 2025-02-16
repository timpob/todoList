import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./Redux/reduxStore"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
        <p>HELLO WORLD</p>
        <p>HELLO WORLD ONE MORE TIME</p>
        <p>HELLO WORLD ONE MORE TIME 2000</p>
        <p>HELLO WORLD ONE MORE TIME 4000</p>
        <p>HELLO WORLD ONE MORE TIME 6000</p>
        <p>HELLO WORLD ONE MORE TIME 8000</p>

    </Provider>
);

