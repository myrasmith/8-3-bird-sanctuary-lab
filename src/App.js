import { Component } from "react";
import BirdGallery from "./components/BirdGallery";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  render() {
    const { birds, bonusItems } = this.props;
    const { cart } = this.state;
    return (
      <div className="App">
        <h1>Save a bird</h1>
        <div className="app-grid">
          <Cart bonusItems={bonusItems} cart={cart} />
          <Checkout />
          <BirdGallery birds={birds} />
        </div>
      </div>
    );
  }
}

export default App;
