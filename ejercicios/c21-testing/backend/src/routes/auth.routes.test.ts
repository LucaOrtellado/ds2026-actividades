// Estos tests requieren una base de datos PostgreSQL activa con el seed cargado (docker compose up -d db)
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app.js";

describe("POST /api/auth/login (requiere DB)", () => {
  it("inicia sesión correctamente con credenciales válidas", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "admin@ejemplo.com", password: "ad1234" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body.usuario).toMatchObject({
      email: "admin@ejemplo.com",
      rol: "ADMIN",
    });
  });

  it("devuelve 401 ante credenciales inválidas", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "admin@ejemplo.com", password: "password-incorrecto" });

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("error", "Credenciales inválidas");
  });
});
