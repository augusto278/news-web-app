import React, { useState, useEffect } from "react";
import "./Indonesia.css";
import ArticleCard from "../components/ArticleCard";
function Indonesia({ saveArticle, savedArticles }) {
  const [articles, setArticles] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=indonesia&api-key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setArticles(data.response.docs))
      .catch((error) => console.error("Error fetching Indonesia articles:", error));
  }, [API_KEY]);

  return (
    <div className="indonesia-page">
      <h1 className="text-center mb-4 text-light">INDONESIA</h1>
      <div className="container">
        <div className="row g-4">
          {articles.map((article) => (
            <ArticleCard
            key={article._id}
            article={article}
            saveArticle={saveArticle}
            isSaved={savedArticles.some((a) => a._id === article._id)}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Indonesia;
