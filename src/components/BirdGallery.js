import BirdCard from "./BirdCard";
import "./BirdGallery.css";

function BirdGallery({ birds, addToCart }) {
  const birdCards = birds.map((bird) => (
    <li key={bird.id}>
      <BirdCard bird={bird} handleClick={() => addToCart(bird)} />
    </li>
  ));
  return <ul className="bird-gallery">{birdCards}</ul>;
}

export default BirdGallery;
