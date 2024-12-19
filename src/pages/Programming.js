import React, { useState, useEffect } from "react";
import "./Programming.css";
import ArticleCard from "../components/ArticleCard";

const Programming = ({ saveArticle, savedArticles }) => {
  const [articles, setArticles] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=programming&api-key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setArticles(data.response.docs))
      .catch((error) => console.error("Error fetching programming articles:", error));
  }, [API_KEY]);

  return (
    <div className="programming-page">
      <h1 className="text-center mb-4 text-warning">PROGRAMMING</h1>
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

export default Programming;
