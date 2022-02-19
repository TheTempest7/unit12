
import React from "react";
import GoodList from "./containers/GoodList";
import CartList from "./containers/CartList";

function App() {
  return (
    <div className="goods-field">
    <GoodList/>
    <CartList/>
    </div>
  );
}

export default App;
