import Header from "../Header"
import CardPizza from "../CardPizza";
import headerImg from '../../assets/imgs/Header.jpg';
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Home() {
  const { pizzas, handleIncrease} = useContext(CartContext)

  return (
    <>
    <Header img={headerImg}/>
    <section className="py-4 bg-light border-top border-warning border-3">
      <div className="container">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <CardPizza 
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              onAddToCart={() => handleIncrease(pizza.id)}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
