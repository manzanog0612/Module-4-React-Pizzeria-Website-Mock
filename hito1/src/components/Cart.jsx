import { pizzaCart } from "../assets/js/pizzas";
import React, {useState} from 'react'
import '../assets/css/Cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState(pizzaCart);
  const [total, setTotal] = useState(cartItems.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0));

  const handleIncrease = (id) => {
    const updatedCart = cartItems.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    const totalPrice = updatedCart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
    setTotal(totalPrice);
    setCartItems(updatedCart);
  };

const handleDecrease = (id) => {
  const updatedCart = cartItems
    .map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
    )
    .filter((pizza) => pizza.count > 0);
    const totalPrice = updatedCart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
  setTotal(totalPrice);
  setCartItems(updatedCart);
};

  return (
    <div className="p-4">
        <p className="fw-normal fs-5">Detalles del pedido:</p>
        <div className="gap-3 d-flex flex-column mx-auto">
            {cartItems.map((pizza) => (
            <div key={pizza.id} className="pizza-item-container">
                <div className="pizza-item-info">
                    <img src={pizza.img} alt={pizza.name} />
                    <h5>{pizza.name}</h5>
                </div>
                <div className="pizza-item-buy-section">
                    <span>Precio: ${pizza.price.toLocaleString("es-CL")}</span>
                    <button className="btn btn-outline-danger" onClick={() => handleDecrease(pizza.id)}>-</button>
                    <span className="counter">{pizza.count}</span>
                    <button className="btn btn-outline-primary" onClick={() => handleIncrease(pizza.id)}>+</button>
                </div>            
            </div>))}
        </div>
        <h2 className="fw-normal fs-2 mt-5 fw-bold">Total: ${total}</h2>
        <button className="btn bg-dark text-white">Pagar</button>
    </div>
  );
}