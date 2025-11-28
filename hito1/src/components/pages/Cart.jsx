import {useContext} from 'react'
import '../../assets/css/Cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cartItems, total, handleIncrease, handleDecrease} = useContext(CartContext)

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