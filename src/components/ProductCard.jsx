import "../styles/ProductCard.css";

export default function ProductCard({ data }) {
  const { name, sizes, imageFront, imageBack } = data;
  const whatsappMessage = encodeURIComponent(
    `Hola! Consulto por el modelo ${name}.`
  );

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={imageFront} alt={name} className="front" loading="lazy" />
        <img src={imageBack} alt={`${name} espalda`} className="back" loading="lazy" />
      </div>

      <div className="product-info">
        <h3>{name}</h3>
        <p className="sizes">
          Talles disponibles: {sizes.join(" / ")}
        </p>
        <a
          href={`https://wa.me/549XXXXXXXXXX?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Ver disponibilidad
        </a>
      </div>
    </div>
  );
}
