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

  render() {
    const { firstName, lastName, email, zip } = this.state;
    return (
      <aside className="aside checkout">
        <h2>Checkout</h2>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" value={lastName} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} />
          <label htmlFor="zip">Zip Code</label>
          <input type="number" name="zip" id="zip" value={zip} />
          <input type="submit" value="Submit" />
        </form>
      </aside>
    );
  }
}

export default Checkout;
