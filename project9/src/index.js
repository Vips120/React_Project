import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider} from "react-redux";
import { createStore,applyMiddleware,compose} from "redux";
import Thunk from "redux-thunk";
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import reducers from "./redux/store/index";
import * as serviceWorker from './serviceWorker';
import Loading from './components/loading/loading';

const composewrapper = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composewrapper(applyMiddleware(Thunk)));
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
      <Loading>
      <App />
      </Loading>
    </BrowserRouter>
    </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
