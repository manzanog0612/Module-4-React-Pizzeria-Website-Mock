import Header from "./Header"
import CardPizza from "./CardPizza";
import headerImg from '../assets/imgs/Header.jpg';

export default function Home() {
  return (
    <>
    <Header img={headerImg}/>
      <section class="py-4 bg-light border-top border-warning border-3">
        <div class="container">
          <div class="row g-4">
            <CardPizza name="Napolitana" price={5950} ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/>
            <CardPizza name="Española" price={6950} ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://www.pizzapizza.cl/wp-content/uploads/2021/01/espanola-web-scaled.jpg"/>
            <CardPizza name="Pepperoni" price={6950} ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://www.cobsbread.com/us/wp-content//uploads/2022/09/Pepperoni-pizza-850x630-1.png"/>
          </div>
        </div>
      </section>
    </>
  )
}
