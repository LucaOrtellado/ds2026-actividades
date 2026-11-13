import { describe, it, expect } from "vitest";
import { loginSchema } from "./auth.validation.js";

describe("loginSchema", () => {
  it("normaliza el email pasando a minúsculas y recortando espacios", () => {
    const res = loginSchema.safeParse({
      email: "  ADMIN@EJEMPLO.COM  ",
      password: "password123",
    });
    expect(res.success).toBe(true);
    if (res.success) {
      expect(res.data.email).toBe("admin@ejemplo.com");
    }
  });

  it("falla si la contraseña está vacía", () => {
    const res = loginSchema.safeParse({
      email: "admin@ejemplo.com",
      password: "",
    });
    expect(res.success).toBe(false);
  });
});
