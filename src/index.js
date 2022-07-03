import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore } from 'redux'; 
import rootReducer from './reducers/index'; //importo i reducers uniti dal combine
import {Provider} from 'react-redux'; //ri-utilizzo di ciò che creo con Redux nell'app

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>
);


