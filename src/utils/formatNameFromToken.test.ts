import { describe, expect, it } from "vitest";
import { formatNameFromToken } from "./formatNameFromToken";

describe("formatNameFromToken", () => {
	it("should reverse name format when comma-separated (Azure AD format)", () => {
		expect(formatNameFromToken("Nilsen, Tom")).toBe("Tom Nilsen");
	});

	it("should handle multiple parts in reversed format", () => {
		expect(formatNameFromToken("Johansen, Hans Peter")).toBe(
			"Hans Peter Johansen",
		);
	});

	it("should return name unchanged when no comma present", () => {
		expect(formatNameFromToken("Tom Nilsen")).toBe("Tom Nilsen");
	});

	it("should handle special characters in names", () => {
		expect(formatNameFromToken("Ø'Neill, John-Paul")).toBe("John-Paul Ø'Neill");
	});

	it("should handle Norwegian characters", () => {
		expect(formatNameFromToken("Åkersen, Åsa")).toBe("Åsa Åkersen");
	});
});
