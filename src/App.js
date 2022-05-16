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

  addToCart = (bird) => {
    this.setState((state) => ({ cart: [...state.cart, bird] }));
  };

  render() {
    const { birds, bonusItems } = this.props;
    const { cart } = this.state;

    const total = cart.reduce((total, bird) => total + bird.amount, 0);

    return (
      <div className="App">
        <h1>Save a bird</h1>
        <div className="app-grid">
          <Cart bonusItems={bonusItems} cart={cart} total={total} />
          <Checkout />
          <BirdGallery birds={birds} addToCart={this.addToCart} />
        </div>
      </div>
    );
  }
}

export default App;
