import express, { Application } from "express";
import userRoutes from "./routes/users.routes";
import productRoutes from "./routes/products.routes";
import exampleRoutes from "./routes/example.routes";

const app: Application = express();
const PORT = 80;

// Middleware para parsear JSON
app.use(express.json());

// Conectar rutas
app.use("/users", userRoutes); // Rutas de usuarios
app.use("/products", productRoutes); // Rutas de productos
app.use("/example", exampleRoutes); // Rutas de ejemplo

// Ruta base para verificar el estado de la API
app.get("/", (req, res) => {
    res.send("¡API funcionando correctamente!");
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});