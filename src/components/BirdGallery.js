import BirdCard from "./BirdCard";
import "./BirdGallery.css";

function BirdGallery({ birds }) {
  const birdCards = birds.map((bird) => (
    <li key={bird.id}>
      <BirdCard bird={bird} />
    </li>
  ));
  return <ul className="bird-gallery">{birdCards}</ul>;
}

export default BirdGallery;
