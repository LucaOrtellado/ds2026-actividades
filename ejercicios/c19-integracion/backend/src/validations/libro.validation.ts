import { z } from "zod";
export const libroCreateSchema = z.object({
 titulo: z.string().trim().min(1, "El titulo del libro es obligatorio").max(200),
 precio: z.number().int().positive("El precio debe ser mayor a 0"),
 imagen: z.string().optional(),
 disponible: z.boolean().optional(), 
 autorId: z.number().int().positive("El autor del libro es obligatorio"),
});
export const libroUpdateSchema = libroCreateSchema.partial();
export const idParamSchema = z.object({
 id: z.coerce.number().int().positive("El id debe ser un numero positivo"),
});
export type LibroCreate = z.infer<typeof libroCreateSchema>;
