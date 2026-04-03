import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>Your home for beautiful houseplants 🌿</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
