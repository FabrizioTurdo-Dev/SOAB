// Archivo: /api/products.js

export default async function handler(req, res) {
  // Obtenemos las claves secretas de Vercel
  const STORE_ID = process.env.TIENDANUBE_STORE_ID;
  const ACCESS_TOKEN = process.env.TIENDANUBE_ACCESS_TOKEN;

  // Si no hay claves, avisamos del error
  if (!STORE_ID || !ACCESS_TOKEN) {
    return res.status(500).json({ 
      error: 'Faltan configurar las credenciales (TIENDANUBE_STORE_ID y ACCESS_TOKEN) en el panel de Vercel.' 
    });
  }

  try {
    // Pedimos los productos a Tienda Nube
    const response = await fetch(`https://api.tiendanube.com/v1/${STORE_ID}/products`, {
      method: 'GET',
      headers: {
        'Authentication': `bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'SOAB-Bikinis (API Middleware)'
      }
    });

    if (!response.ok) {
      throw new Error(`Error Tienda Nube: ${response.statusText}`);
    }

    const data = await response.json();

    // Respondemos a tu página con los datos
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}