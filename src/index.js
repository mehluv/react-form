import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";
import DatePicker from 'react-datepicker';

import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
      

    </div>
  </Provider>,
  rootEl
);
