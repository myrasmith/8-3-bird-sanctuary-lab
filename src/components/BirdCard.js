import "./BirdCard.css";

function BirdCard({ bird: { name, amount, img } }) {
  console.log(img);
  return (
    <article className="card">
      <h4>{name}</h4>
      <p>Price: ${amount}</p>
      <img src={img} alt={name} />
      <button>Adopt</button>
    </article>
  );
}

export default BirdCard;
