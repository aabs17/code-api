import { Router, Request, Response } from "express";

const router = Router();

// Ruta GET para obtener todos los productos
router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Obteniendo todos los productos" });
});

// Ruta POST para crear un producto
router.post("/", (req: Request, res: Response) => {
    const { nombre, precio } = req.body;
    res.json({ message: "Producto creado", data: { nombre, precio } });
});

// Ruta GET para obtener un producto específico por ID
router.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Obteniendo producto con ID: ${id}` });
});

export default router;