const axios = require('axios'); // Vamos a usar una librería más robusta para el back

module.exports = async (req, res) => {
  const STORE_ID = process.env.TIENDANUBE_STORE_ID;
  const ACCESS_TOKEN = process.env.TIENDANUBE_ACCESS_TOKEN;

  // Habilitar CORS para que tu frontend pueda leer los datos
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (!STORE_ID || !ACCESS_TOKEN) {
    return res.status(500).json({ error: 'Credenciales no configuradas' });
  }

  try {
    const url = `https://api.tiendanube.com/v1/${STORE_ID}/products`;
    const response = await axios.get(url, {
      headers: {
        'Authentication': `bearer ${ACCESS_TOKEN}`,
        'User-Agent': 'SOAB-App (NodeJS)'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ 
      error: 'Error en la comunicación con Tienda Nube',
      details: error.message 
    });
  }
};