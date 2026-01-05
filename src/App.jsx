// import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Trust from "./components/Trust";
import Footer from "./components/Footer";

// import { initScrollReveal } from "./components/ScrollReveal";
import "./styles/main.css";

function App() {
  // useEffect(() => {
  //   initScrollReveal();
  // }, []);

  return (
    <>
      <Header />
      <Hero />
      <Collection />
      <Trust />
      <Footer />
    </>
  );
}

export default App;
