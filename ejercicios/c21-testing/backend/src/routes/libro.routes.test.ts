import { it, expect } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app.js";
import { JWT_SECRET } from "../config/env.js";

const tokenCliente = jwt.sign({ id: 2, rol: "CLIENTE" }, JWT_SECRET, { expiresIn: "1h" });
const tokenAdmin   = jwt.sign({ id: 1, rol: "ADMIN" },   JWT_SECRET, { expiresIn: "1h" });

it("sin token → 401", async () => {
  const res = await request(app).post("/api/libros").send({});
  expect(res.status).toBe(401);
});

it("con token de CLIENTE → 403", async () => {
  const res = await request(app)
    .post("/api/libros")
    .set("Authorization", `Bearer ${tokenCliente}`)
    .send({ titulo: "Rayuela", precio: 7000, imagen: "x", autorId: 1 });
  expect(res.status).toBe(403);
});

it("ADMIN con body inválido → 400, no 403", async () => {
  const res = await request(app)
    .post("/api/libros")
    .set("Authorization", `Bearer ${tokenAdmin}`)
    .send({ precio: -5 });
  expect(res.status).toBe(400);
});
