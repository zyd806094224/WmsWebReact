import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from "./router/AppRouter";
import rootReducer from "./redux/action";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
