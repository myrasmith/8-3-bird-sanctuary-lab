import "./Cart.css";

function Cart({ discount, total, bonusItems, cart }) {
  console.log("Cart component has cart:", cart);
  const cartItems = cart.map((bird) => {
    return (
      <li>
        {bird.name}: ${bird.amount}
      </li>
    );
  });

  return (
    <aside className="aside cart">
      <h2>Cart</h2>
      <h4>Discount: {discount}%</h4>
      <h4>Total: ${total}</h4>
      <ol className="cart-list Cart">{cartItems}</ol>
      <p>Your donations qualify you for the following items:</p>
      <ul>
        {total >= 100 && <li>{bonusItems[0]}</li>}
        {total >= 300 && <li>{bonusItems[1]}</li>}
        {total >= 500 && <li>{bonusItems[2]}</li>}
        {total >= 1000 && <li>{bonusItems[2]}</li>}
      </ul>
    </aside>
  );
}

export default Cart;
