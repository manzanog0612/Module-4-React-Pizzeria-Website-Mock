import Header from "./Header"
import CardPizza from "./CardPizza";
import headerImg from '../assets/imgs/Header.jpg';
import { pizzas } from "../assets/js/pizzas";

export default function Home() {
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
