import { render, screen} from "@testing-library/react"
import Try from "./Try";
import { describe, expect, it } from "vitest";

describe("Try Component", () => {
  it("renders correct heading", () => {
    render(<Try/>);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
})