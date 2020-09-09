 
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store"
import App from './App';
import { autoFetchAction } from "./actions"


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lon=position.coords.longitude;
        let lat=position.coords.latitude;

        if (lon && lat) {
          store.dispatch(autoFetchAction(lon, lat));
        }
      });
    
  };



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root')
);