import headlinesReducer from "../HeadlinesReducer";

describe("headlinesReducer test", () => {
  it("returns the initial state", () => {
    expect(headlinesReducer(undefined, { type: "" })).toEqual({
      entities: {
        "top-headline-1": {
          author: "",
          content: "",
          description: "Subtitle of top headline 1",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "TOP HEADLINE 1",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "top-headline-2": {
          author: "",
          content: "",
          description: "Subtitle of top headline 2",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "TOP HEADLINE 2",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "top-headline-3": {
          author: "",
          content: "",
          description: "Subtitle of top headline 3",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "TOP HEADLINE 3",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "top-headline-4": {
          author: "",
          content: "",
          description: "Subtitle of top headline 4",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "TOP HEADLINE 4",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "top-headline-5": {
          author: "",
          content: "",
          description: "Subtitle of top headline 5",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "TOP HEADLINE 5",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "top-headline-6": {
          author: "",
          content: "",
          description: "Subtitle of top headline 6",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "TOP HEADLINE 6",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "top-headline-7": {
          author: "",
          content: "",
          description: "Subtitle of top headline 7",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "TOP HEADLINE 7",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "top-headline-8": {
          author: "",
          content: "",
          description: "Subtitle of top headline 8",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "TOP HEADLINE 8",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "top-headline-9": {
          author: "",
          content: "",
          description: "Subtitle of top headline 9",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "TOP HEADLINE 9",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
      },
    });
  });
});
