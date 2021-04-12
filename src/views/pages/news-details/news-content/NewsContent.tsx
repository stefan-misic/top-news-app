import React, { useEffect, useState } from "react";

import { NewsData } from "../../../../selectors/news/NewsSelectorModels";
import "./NewsContent.scss";

const NewsContent: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsData>();

  useEffect(() => {
    const storagedNewsData: string | null = sessionStorage.getItem("newsData");

    if (storagedNewsData) {
      const parsedNewsData: NewsData = JSON.parse(storagedNewsData);
      setNewsData(parsedNewsData);
    }
  }, [setNewsData]);

  return (
    <div className="news-content">
      <span className="news-content__title">{newsData?.title}</span>
      <span className="news-content__author">{newsData?.author}</span>
      <img
        className="news-content__image"
        src={newsData?.imageUrl}
        alt="news"
      />

      <div className="news-content__body">
        <div className="news-content__body__left">
          <span className="news-content__subtitle">{newsData?.subtitle}</span>
          <span className="news-content__text">{newsData?.text}</span>
        </div>

        <div className="news-content__body__right">
          {/* <button className="news-content__share-button">
            <img
              className="news-content__share-button__icon"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="facebook"
            />
          </button>
          <button className="news-content__share-button">
            <img
              className="news-content__share-button__icon"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="twitter"
            />
          </button>
          <button className="news-content__share-button">
            <img
              className="news-content__share-button__icon"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="email"
            />
          </button>
          <button className="news-content__share-button">
            <img
              className="news-content__share-button__icon"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="link"
            />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
