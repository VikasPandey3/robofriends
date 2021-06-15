import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {serchRobotreducer,requestRobotreducer} from './reducer'
// import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import 'tachyons'
// const logger=createLogger()
const rootReducer=combineReducers({serchRobotreducer,requestRobotreducer})
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
