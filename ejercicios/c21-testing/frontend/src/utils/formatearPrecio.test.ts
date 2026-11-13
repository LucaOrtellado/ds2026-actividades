import { describe, it, expect } from "vitest";
import { formatearPrecio } from "./formatearPrecio";

describe("formatearPrecio", () => {
  it("formatea correctamente números enteros", () => {
    expect(formatearPrecio(1500)).toMatch(/^\$1[\.,]500$/);
  });

  it("formatea 0 correctamente", () => {
    expect(formatearPrecio(0)).toBe("$0");
  });
});
