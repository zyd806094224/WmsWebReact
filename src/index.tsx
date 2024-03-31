import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from "./router/AppRouter";
/** 提供器*/
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
