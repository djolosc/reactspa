import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders the button with the correct title", () => {
    render(<Button buttonTitle="Click Me" onClick={() => {}} />);

    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeTruthy();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = vi.fn();

    render(<Button buttonTitle="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText("Click Me");

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
