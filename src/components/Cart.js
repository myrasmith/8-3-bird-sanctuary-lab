import "./Cart.css";

function Cart({ discount, total, bonusItems }) {
  return (
    <aside className="aside cart">
      <h2>Cart</h2>
      <h4>Discount: {discount}%</h4>
      <h4>Total: ${total}</h4>
      <ol class="cart-list Cart"></ol>
      <p>Your donations qualify you for the following items:</p>
      <ul></ul>
    </aside>
  );
}

export default Cart;
