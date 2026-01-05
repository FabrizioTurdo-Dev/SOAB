import "../styles/Collection.css";
import { bikinis } from "../data/bikinis";
import ProductCard from "./ProductCard";
import { Reveal } from "./ScrollReveal";


export default function Collection() {
  return (
    <section className="collection" id="collection">
      <header className="collection-header">
        <Reveal direction="up">
          <h2>Bikinis</h2>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p>
            Modelos simples, pensados para usarse más de una vez.
            Sin exagerar, sin prometer de más.
          </p>
        </Reveal>
      </header>

      <div className="products-grid">
        {bikinis.map((item, index) => (
          <Reveal
            key={item.id}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={(index % 2) * 0.15}
          >
            <ProductCard data={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
