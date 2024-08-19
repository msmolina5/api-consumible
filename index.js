const express = require('express');
const cors = require('cors');  // Asegúrate de instalar este paquete
const app = express();
const port = process.env.PORT || 3020;

// Middleware para parsear JSON
app.use(express.json());

// Habilitar CORS para todas las solicitudes
app.use(cors());


// Datos de ejemplo
const productos = [
    { "id": 1, "modelo": "Mustang GT", "marca": "Ford", "año": 2024, "precio": 45000, "imagen": "https://imgd.aeplcdn.com/1280x720/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80", "velocidad_maxima": "250 km/h" },
    { "id": 2, "modelo": "Civic Type R", "marca": "Honda", "año": 2023, "precio": 35000, "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9I4Hf18FD2O6vzIjv6LPurwcMQHQbD_B4tA&s", "velocidad_maxima": "270 km/h" },
    { "id": 3, "modelo": "Model S Plaid", "marca": "Tesla", "año": 2024, "precio": 99999, "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBsstLv10xnOHEYDb9b-NetBoMAnkPuLX3A&s", "velocidad_maxima": "320 km/h" },
    { "id": 4, "modelo": "911 Carrera", "marca": "Porsche", "año": 2024, "precio": 90000, "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycFuOSkIyeHsIxOjNEJVnNPyqjsyClqW7Og&s", "velocidad_maxima": "300 km/h" },
    { "id": 5, "modelo": "GTR Nismo", "marca": "Nissan", "año": 2023, "precio": 115000, "imagen": "https://www.nissan-cdn.net/content/dam/Nissan/ec/vehicles/pathfinder/my23/vlp/2023-nissan-pathfinder-two-tone-color-landscape.jpg.ximg.full.hero.jpg", "velocidad_maxima": "315 km/h" },
    { "id": 6, "modelo": "Audi R8", "marca": "Audi", "año": 2023, "precio": 145000, "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QZnMdkYYwsD3biuvZc4zUmZ0kvDFppKHCQ&s", "velocidad_maxima": "330 km/h" },
    { "id": 7, "modelo": "Ferrari 488 GTB", "marca": "Ferrari", "año": 2023, "precio": 200000, "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjYTh3tsoy7KfpfL5cetAdc8201udKg-WzQ&s", "velocidad_maxima": "330 km/h" },
    { "id": 8, "modelo": "BMW M3", "marca": "BMW", "año": 2024, "precio": 70000, "imagen": "https://www.bmw.com.ec/content/dam/bmw/common/all-models/m-series/m3-sedan/2020/overview/bmw-3-series-sedan-m-automobiles-sd-individual-01.jpg", "velocidad_maxima": "290 km/h" }
  ]
  

// Ruta para obtener todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Ruta para obtener un producto por ID
app.get('/productos/:id', (req, res) => {
  const productos = productos.find(p => p.id === parseInt(req.params.id));
  if (productos) {
    res.json(productos);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API REST escuchando en http://localhost:${port}`);
});
