import React from "react";

// 不用redux撰寫請移除相關程式碼及檔案
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import Todos from "./components/Todos";

const initialState = {};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
