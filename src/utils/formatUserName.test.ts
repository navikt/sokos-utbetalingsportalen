import { describe, it, expect } from "vitest";
import { formatUserName } from "./formatUserName";

describe("formatUserName", () => {
  it("should reverse name format when comma-separated (Azure AD format)", () => {
    expect(formatUserName("Nilsen, Tom")).toBe("Tom Nilsen");
  });

  it("should handle multiple parts in reversed format", () => {
    expect(formatUserName("Johansen, Hans Peter")).toBe("Hans Peter Johansen");
  });

  it("should return name unchanged when no comma present", () => {
    expect(formatUserName("Tom Nilsen")).toBe("Tom Nilsen");
  });

  it("should handle names with extra whitespace around comma", () => {
    expect(formatUserName("Nilsen  ,  Tom")).toBe("Tom Nilsen");
  });

  it("should handle single name without comma", () => {
    expect(formatUserName("Ola")).toBe("Ola");
  });

  it("should handle empty string", () => {
    expect(formatUserName("")).toBe("");
  });

  it("should handle name with only whitespace", () => {
    expect(formatUserName("   ")).toBe("   ");
  });

  it("should preserve case of letters", () => {
    expect(formatUserName("NILSEN, tom")).toBe("tom NILSEN");
  });

  it("should handle special characters in names", () => {
    expect(formatUserName("Ø'Neill, John-Paul")).toBe("John-Paul Ø'Neill");
  });

  it("should handle Norwegian characters", () => {
    expect(formatUserName("Åkersen, Åsa")).toBe("Åsa Åkersen");
  });
});
