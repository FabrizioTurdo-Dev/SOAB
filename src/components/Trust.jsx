import "../styles/Trust.css";
import { Reveal } from "./ScrollReveal";

export default function Trust() {
  return (
    <section className="trust">
      <Reveal direction="up">
        <h2>Sobre SOAB</h2>
      </Reveal>

      <div className="trust-content">
        <Reveal direction="up" delay={0.2}>
          <p>
            <strong>SOAB</strong> nació con una idea simple: hacer bikinis que se
            usen de verdad.
            <br />
            Sin exagerar, sin prometer de más.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.4}>
          <ul>
            <li>✔ Diseños pensados para estar cómoda</li>
            <li>✔ Modelos simples, sin vueltas</li>
            <li>✔ Atención directa por WhatsApp</li>
            <li>✔ Envíos a todo el país</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
