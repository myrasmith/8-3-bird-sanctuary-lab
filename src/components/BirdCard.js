import "./BirdCard.css";

function BirdCard({ bird: { name, amount, img }, handleClick }) {
  return (
    <article className="birds card">
      <h4>{name}</h4>
      <p>Price: ${amount}</p>
      <img src={img} alt={name} />
      <button onClick={handleClick}>Adopt</button>
    </article>
  );
}

export default BirdCard;
