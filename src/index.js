import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createstore } from "redux";
import JeuStore from "./JeuStore";
const store=createstore(JeuStore);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    
      <App />
    
  </Provider>,
  
);
