import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useState } from "react";

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button
        disabled={added}
        onClick={() => {
          dispatch(addToCart(plant));
          setAdded(true);
        }}
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
