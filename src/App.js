import React from "react";

// 不用redux撰寫請移除相關程式碼及檔案
import { Provider } from "react-redux";
import Todo from "./components/Todo";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
