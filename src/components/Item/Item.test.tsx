import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "./Item";

describe("Item component", () => {
  const props = {
    id: "1",
    title: "Test Item",
    image: "test-image.png",
    isFavorite: false,
    onClick: vi.fn(),
  };

  it("renders the component with given props", () => {
    render(<Item {...props} />);

    expect(screen.getByText("Test Item")).toBeTruthy();
    expect(screen.getByText("1")).toBeTruthy();
  });

  it("calls onClick handler when button is clicked", () => {
    render(<Item {...props} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it("renders the correct favorite icon based on isFavorite prop", () => {
    const { rerender } = render(<Item {...props} />);
    expect(screen.getByTestId("starEmpty")).toBeTruthy();

    rerender(<Item {...props} isFavorite={true} />);
    expect(screen.getByTestId("starFull")).toBeTruthy();
  });
});
