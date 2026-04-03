import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header>
      <h2>🌿 Paradise Nursery</h2>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 {total}</Link>
      </nav>
    </header>
  );
}
