import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import reducer from "./reducer/reducer";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total />
        </div>
      </div>
    </Provider>
  );
};

export default App;

// Header => car={state.car}
// AddedFeatures => car={state.car}
// AdditionalFeatures => additionalFeatures={state.additionalFeatures}
// Total => car={state.car} additionalPrice={state.additionalPrice}
