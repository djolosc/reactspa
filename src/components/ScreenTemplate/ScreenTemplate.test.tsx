import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ScreenTemplate from "./ScreenTemplate";

describe("ScreenTemplate component", () => {
  const props = {
    children: <div>Test Content</div>,
    title: "Screen Title",
    buttonTitle: "Click Me",
    contentTitle: "Content Title",
    onButtonClick: vi.fn(),
  };

  it("renders with the correct structure and content", () => {
    render(<ScreenTemplate {...props} />);

    // Check for titles
    expect(screen.getByText("Screen Title")).toBeTruthy();
    expect(screen.getByText("Content Title")).toBeTruthy();

    // Check for children
    expect(screen.getByText("Test Content")).toBeTruthy();

    // Check for button
    const button = screen.getByText("Click Me");
    expect(button).toBeTruthy();
  });

  it("calls onButtonClick when the button is clicked", () => {
    render(<ScreenTemplate {...props} />);

    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(props.onButtonClick).toHaveBeenCalledTimes(1);
  });
});
