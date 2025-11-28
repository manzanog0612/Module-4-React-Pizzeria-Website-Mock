import { createContext, useState, useEffect } from "react";
//import { pizzaCart } from "../../assets/js/pizzas";

export const CartContext = createContext({})

export const CartContextProvider = ({children}) =>{
    const apiUrl = "http://localhost:5000/api/pizzas";

    const [pizzas, setPizzas] = useState([]);
    const [cartItems, setCartItems] = useState(pizzas);
    const [total, setTotal] = useState(cartItems.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0));

    useEffect(() => {
        getPizzas();
    }, []);

    const getPizzas = async () =>  {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setPizzas(data);
        console.log(data);
    }

    const handleIncrease = (id) => {
        const existsInCart = cartItems.find(p => p.id === id);
        let updatedCart;
        if (existsInCart) {
            updatedCart = cartItems.map((pizza) =>
                pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
            );
        }
        else {
            const pizzaToAdd = pizzas.find(p => p.id === id);
            updatedCart = [...cartItems, { ...pizzaToAdd, count: 1 }];
        }

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

    const globalState = {
        cartItems,
        setCartItems,
        total,
        setTotal,
        pizzas,
        handleIncrease,
        handleDecrease
    }

    return (
    <CartContext.Provider value = {globalState}>
        {children}
    </CartContext.Provider>)
}