import { describe, expect, it } from "vitest";
import { formatNameClaim } from "./formatNameClaim";

describe("formatNameClaim", () => {
  it("should reverse name format when comma-separated (Azure AD format)", () => {
    expect(formatNameClaim("Nilsen, Tom")).toBe("Tom Nilsen");
  });

  it("should handle multiple parts in reversed format", () => {
    expect(formatNameClaim("Johansen, Hans Peter")).toBe("Hans Peter Johansen");
  });

  it("should return name unchanged when no comma present", () => {
    expect(formatNameClaim("Tom Nilsen")).toBe("Tom Nilsen");
  });

  it("should handle special characters in names", () => {
    expect(formatNameClaim("Ø'Neill, John-Paul")).toBe("John-Paul Ø'Neill");
  });

  it("should handle Norwegian characters", () => {
    expect(formatNameClaim("Åkersen, Åsa")).toBe("Åsa Åkersen");
  });
});
