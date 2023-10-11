import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonChange from "./ButtonChange";
import { describe, expect, it } from 'vitest';
describe("Button Change Component", () => {
  it("renders magnificent monkey", () => {
    const { container } = render(<ButtonChange/>)
    expect(container).toMatchSnapshot();
  })

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();
    render(<ButtonChange/>)
    const button = screen.getByRole('button', {name: "Click Me"})

    await user.click(button)

    expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i)
  })
})