import { Router, Request, Response } from "express";

const router = Router();

// Ruta GET para obtener todos los usuarios
router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Obteniendo todos los usuarios" });
});

// Ruta POST para crear un usuario
router.post("/", (req: Request, res: Response) => {
    const { nombre, edad } = req.body;
    res.json({ message: "Usuario creado", data: { nombre, edad } });
});

// Ruta GET para obtener un usuario específico por ID
router.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Obteniendo usuario con ID: ${id}` });
});

export default router;