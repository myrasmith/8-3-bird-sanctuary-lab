import "./Cart.css";

function Cart({ discount, total, bonusItems, cart, deleteFromCart }) {
  const cartItems = cart.map((bird, ind) => (
    <li key={`${bird.id} - ${ind}`}>
      {bird.name}: ${bird.amount}
      <button onClick={() => deleteFromCart(ind)}>Remove from cart</button>
    </li>
  ));

  return (
    <aside className="aside cart Cart">
      <h2>Cart</h2>
      <h4>Discount: {discount}%</h4>
      <h4 className="total">Total: ${total}</h4>
      <ol className="cart-list ">{cartItems}</ol>
      <p>Your donations qualify you for the following items:</p>
      <ul>
        {total >= 100 && <li>{bonusItems[0]}</li>}
        {total >= 300 && <li>{bonusItems[1]}</li>}
        {total >= 500 && <li>{bonusItems[2]}</li>}
        {total >= 1000 && <li>{bonusItems[3]}</li>}
      </ul>
    </aside>
  );
}

export default Cart;
