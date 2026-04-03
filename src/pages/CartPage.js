import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <>
      <Header />
      <h2>Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} width="50" />
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => dispatch(increase(item.id))}>+</button>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(remove(item.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </>
  );
}
