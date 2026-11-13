import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { Prisma } from "../generated/prisma/client.js";

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: "Datos inválidos",
      detalles: err.issues.map(i => ({ campo: i.path.join("."), mensaje: i.message })),
    });
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const code = (err as unknown as { code?: string }).code;

    if (code === "P2002") return res.status(409).json({ error: "Ya existe un registro con ese valor" });
    if (code === "P2025") return res.status(404).json({ error: "No encontrado" });
    if (code === "P2003") return res.status(409).json({ error: "Hay registros relacionados" });
  }

  console.error(err);
  return res.status(500).json({ error: "Error interno del servidor" });
};