import "../styles/Footer.css";
import { Reveal } from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="footer">
      <Reveal direction="up">
        <p>SOAB</p>
        <span>Simple, como tiene que ser.</span>
        <br />
        <a
          href="https://www.instagram.com/soab.ok/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </Reveal>
    </footer>
  );
}
