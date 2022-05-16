function Checkout() {
  return (
    <aside className="aside checkout">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="zip">Zip Code</label>
        <input type="number" name="zip" id="zip" />
        <input type="submit" value="Submit" />
      </form>
    </aside>
  );
}

export default Checkout;
