import React, { useState, useEffect } from "react";
import "./Covid19.css";
import ArticleCard from "../components/ArticleCard";

const Covid19 = ({ saveArticle, savedArticles }) => {
  const [articles, setArticles] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-19&api-key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setArticles(data.response.docs))
      .catch((error) => console.error("Error fetching covid-19 articles:", error));
  }, [API_KEY]);

  return (
    <div className="covid19-page">
      <h1 className="text-center mb-4 text-warning">COVID-19</h1>
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
};

export default Covid19;
