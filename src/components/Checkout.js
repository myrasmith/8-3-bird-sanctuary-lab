import { Component } from "react";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((state) => ({ [name]: value }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.clearForm();
    this.props.clearCart();
    alert("You have adopted birds. Thank you!");
  };

  clearForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
  };

  render() {
    const { firstName, lastName, email, zip } = this.state;
    return (
      <aside className="aside checkout Checkout">
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="zip">Zip Code</label>
          <input
            type="number"
            name="zip"
            id="zip"
            value={zip}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </aside>
    );
  }
}

export default Checkout;
