import { describe, it, expect, vi, afterEach } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import ErrorScreen from "./ErrorScreen";

const mocks = vi.hoisted(() => {
  return {
    mockNavigateHome: vi.fn(),
  };
});

vi.mock("../../hooks", () => ({
  useNavigation: () => ({
    navigateHome: mocks.mockNavigateHome,
  }),
}));

describe("ErrorScreen component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("renders error message and button", () => {
    const { getByText } = render(<ErrorScreen />);
    expect(getByText("OOPS! PAGE NOT FOUND")).toBeTruthy();
    expect(
      getByText("Sorry, the page you're looking for doesn't exist")
    ).toBeTruthy();
    expect(getByText("Return Home")).toBeTruthy();
  });

  it("calls navigateHome function when button is clicked", () => {
    const { getByText } = render(<ErrorScreen />);
    fireEvent.click(getByText("Return Home"));

    expect(mocks.mockNavigateHome).toHaveBeenCalled();
  });
});
