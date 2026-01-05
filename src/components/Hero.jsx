// 1. Agregá useState y useRef acá
import { useState, useRef } from "react";
import "../styles/Hero.css";
import { Reveal } from "./ScrollReveal";
import videoInicio from "../assets/video-inicio.mp4";

export default function Hero() {
    // 2. Creamos la referencia al video y el estado del sonido
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    // 3. Esta es la función que hace la magia cuando tocan el botón
    const toggleSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted; // Cambia la propiedad real del video
            setIsMuted(!isMuted);              // Cambia el ícono
        }
    };

    return (
        // ... acá sigue tu return normal ...
        <section className="hero">
            {/* COLUMNA IZQUIERDA: TEXTO */}
            <div className="hero-content">
                <Reveal direction="up">
                    <h1>No es para una foto.<br />Es para usarlo.</h1>
                </Reveal>

                <Reveal direction="up" delay={0.2}>
                    <p>
                        Bikinis simples, pensados para sentirse bien y usarlos cuando quieras.
                    </p>
                </Reveal>

                <Reveal direction="up" delay={0.4}>
                    <div className="hero-actions">
                        <a
                            href="https://wa.me/549XXXXXXXXXX"
                            className="btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Comprar por WhatsApp
                        </a>
                        <a href="#collection" className="btn-link">
                            Ver colección
                        </a>
                    </div>
                </Reveal>
            </div>

            {/* COLUMNA DERECHA: VIDEO VERTICAL */}
            <div className="hero-media">
                <Reveal direction="left" delay={0.5}>
                    {/* El contenedor del video tiene un marco estilo 'celular' sutil */}
                    {/* ... dentro de tu columna derecha ... */}
                    <div className="video-container">
                        <video
                            ref={videoRef}            // 👈 IMPORTANTE: Conectamos la referencia
                            src={videoInicio}
                            autoPlay
                            loop
                            muted={isMuted}           // 👈 Ahora esto lo controla la variable
                            playsInline
                            className="hero-video-element"
                        />

                        {/* ESTE ES EL BOTÓN DE SONIDO */}
                        <button onClick={toggleSound} className="sound-toggle-btn">
                            {isMuted ? (
                                /* Ícono de Sonido Desactivado (Speaker X) */
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                            ) : (
                                /* Ícono de Sonido Activado (Speaker Wave) */
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                            )}
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}