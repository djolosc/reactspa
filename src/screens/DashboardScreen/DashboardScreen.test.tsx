import { describe, it, expect, vi, afterEach } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import DashboardScreen from "./DashboardScreen";

const mocks = vi.hoisted(() => {
  return {
    mockNavigateToTheList: vi.fn(),
    mockItems: [
      {
        albumId: "1",
        id: "1",
        title: "testTitle",
        url: "testUrl",
        thumbnailUrl: "testThumbnail",
        isFavorite: false,
      },
      {
        albumId: "2",
        id: "2",
        title: "testTitle2",
        url: "testUrl2",
        thumbnailUrl: "testThumbnail2",
        isFavorite: true,
      },
      {
        albumId: "3",
        id: "3",
        title: "testTitle3",
        url: "testUrl3",
        thumbnailUrl: "testThumbnail3",
        isFavorite: false,
      },
      {
        albumId: "4",
        id: "4",
        title: "testTitle4",
        url: "testUrl4",
        thumbnailUrl: "testThumbnail4",
        isFavorite: true,
      },
    ],
  };
});

vi.mock("../../context", () => ({
  useCustomItems: vi.fn().mockImplementation(() => mocks.mockItems),
  useToggleFavorite: vi.fn(),
}));

vi.mock("../../hooks", () => ({
  useNavigation: () => ({
    navigateToTheList: mocks.mockNavigateToTheList,
  }),
}));

describe("Dashboard screen", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders without crashing", async () => {
    const { container } = render(<DashboardScreen />);
    expect(container).toBeDefined();
  });

  it("renders list of favorite items correctly", async () => {
    const { getByText } = render(<DashboardScreen />);

    expect(getByText("Here are your favorite items 🤩")).toBeTruthy();
    expect(getByText("testTitle2")).toBeTruthy();
    expect(getByText("testTitle4")).toBeTruthy();
  });

  it("renders no favorite items message correctly", async () => {
    mocks.mockItems = [];

    const { getByText } = render(<DashboardScreen />);
    expect(
      getByText("You haven't yet selected any favorite item 🥹")
    ).toBeTruthy();
  });

  it("navigates to the list of items", async () => {
    const { getByText } = render(<DashboardScreen />);
    fireEvent.click(getByText("List of Items"));

    expect(mocks.mockNavigateToTheList).toHaveBeenCalled();
  });
});
