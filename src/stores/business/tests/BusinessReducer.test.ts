import businessReducer from "../BusinessReducer";

describe("businessReducer test", () => {
  it("returns the initial state", () => {
    expect(businessReducer(undefined, { type: "" })).toEqual({
      entities: {
        "business-headline-1": {
          author: "",
          content: "",
          description: "Subtitle of business headline 1",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "BUSINESS HEADLINE 1",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "business-headline-2": {
          author: "",
          content: "",
          description: "Subtitle of business headline 2",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "BUSINESS HEADLINE 2",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "business-headline-3": {
          author: "",
          content: "",
          description: "Subtitle of business headline 3",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "BUSINESS HEADLINE 3",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "business-headline-4": {
          author: "",
          content: "",
          description: "Subtitle of business headline 4",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "BUSINESS HEADLINE 4",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "business-headline-5": {
          author: "",
          content: "",
          description: "Subtitle of business headline 5",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "BUSINESS HEADLINE 5",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "business-headline-6": {
          author: "",
          content: "",
          description: "Subtitle of business headline 6",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "BUSINESS HEADLINE 6",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "business-headline-7": {
          author: "",
          content: "",
          description: "Subtitle of business headline 7",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "BUSINESS HEADLINE 7",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "business-headline-8": {
          author: "",
          content: "",
          description: "Subtitle of business headline 8",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "BUSINESS HEADLINE 8",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
        "business-headline-9": {
          author: "",
          content: "",
          description: "Subtitle of business headline 9",
          publishedAt: "",
          source: {
            id: "",
            name: "",
          },
          title: "BUSINESS HEADLINE 9",
          url: "",
          urlToImage: "https://picsum.photos/id/1015/600/600",
        },
      },
    });
  });
});
