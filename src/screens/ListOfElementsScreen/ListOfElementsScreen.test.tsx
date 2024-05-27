import { describe, it, expect, vi, afterEach } from "vitest";
import { render } from "@testing-library/react";

import ListOfElementsScreen from "./ListOfElementsScreen";
import { Mocks } from "../../types";

const mocks: Mocks = vi.hoisted(() => {
  return {
    mockNavigateBack: vi.fn(),
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
    mockPages: [
      [
        {
          albumId: "5",
          id: "5",
          title: "testTitle5",
          url: "testUrl5",
          thumbnailUrl: "testThumbnail5",
        },
        {
          albumId: "6",
          id: "6",
          title: "testTitle6",
          url: "testUrl6",
          thumbnailUrl: "testThumbnail6",
        },
      ],
    ],
    mockError: null as any,
    mockHasNextPage: true,
  };
});

vi.mock("../../context", () => ({
  useCustomItems: vi.fn().mockImplementation(() => mocks.mockItems),
  useSetCustomItems: vi.fn().mockImplementation(() => vi.fn()),
  useToggleFavorite: vi.fn(),
}));

vi.mock("../../queries", () => ({
  useGetItems: vi.fn().mockImplementation(() => ({
    data: {
      pages: mocks.mockPages,
    },
    error: mocks.mockError,
    hasNextPage: mocks.mockHasNextPage,
  })),
}));

vi.mock("../../hooks", () => ({
  useNavigation: () => ({
    navigateBack: mocks.mockNavigateBack,
  }),
  useHandleScrollAndThrottle: vi.fn(),
}));

describe("ListOfElements screen", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders ListOfElementsScreen component", async () => {
    const { getByText } = render(<ListOfElementsScreen />);

    expect(getByText("List of Items")).toBeTruthy();
    expect(getByText("Enjoy the view of your 4 items 🎉")).toBeTruthy();
    expect(getByText("Home")).toBeTruthy();
    expect(getByText("testTitle")).toBeTruthy();
    expect(getByText("testTitle2")).toBeTruthy();
    expect(getByText("testTitle3")).toBeTruthy();
    expect(getByText("testTitle4")).toBeTruthy();
  });

  it("handles error", async () => {
    mocks.mockError = { message: "Error occurred" };
    const { getByText } = render(<ListOfElementsScreen />);

    expect(getByText("Error occurred")).toBeTruthy();
  });

  it("renders 'That's all folks' message when there are no more items", async () => {
    mocks.mockError = null;
    mocks.mockHasNextPage = false;

    const { getByText } = render(<ListOfElementsScreen />);

    expect(getByText("That's all folks, no more items")).toBeTruthy();
  });
});
