import Header from "./Header"
import CardPizza from "./CardPizza";
import headerImg from '../assets/imgs/Header.jpg';
//import { pizzas } from "../assets/js/pizzas";
import { useState, useEffect } from "react";

export default function Home() {
  const apiUrl = "http://localhost:5000/api/pizzas";
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () =>  {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setPizzas(data);
    console.log(data);
  }

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
    <Header img={headerImg}/>
    <section className="py-4 bg-light border-top border-warning border-3">
      <div className="container">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <CardPizza 
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
