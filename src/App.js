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

  clearCart = () => {
    this.setState({ cart: [] });
  };

  addToCart = (bird) => {
    this.setState((state) => ({ cart: [...state.cart, bird] }));
  };

  deleteFromCart = (ind) => {
    console.log("deleting", ind);
    this.setState((state) => {
      let newCart = [...state.cart];
      newCart.splice(ind, 1);
      return { cart: newCart };
    });
  };

  render() {
    const { birds, bonusItems } = this.props;
    const { cart } = this.state;

    const discount = cart.length > 1 ? 10 : 0;
    const multiplier = 1 - discount / 100;
    const total =
      cart.reduce((total, bird) => total + bird.amount, 0) * multiplier;

    return (
      <div className="App">
        <h1>Save a bird</h1>
        <div className="app-grid">
          <Cart
            bonusItems={bonusItems}
            cart={cart}
            total={total}
            discount={discount}
            deleteFromCart={this.deleteFromCart}
          />
          <Checkout clearCart={this.clearCart} />
          <BirdGallery birds={birds} addToCart={this.addToCart} />
        </div>
      </div>
    );
  }
}

export default App;
