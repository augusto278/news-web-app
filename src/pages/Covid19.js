import React, { useState, useEffect } from "react";
import "./Covid19.css";

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
            <div className="col-md-4" key={article._id}>
              <div className="card card-custom h-100 bg-dark">
                <div className="card-body">
                  <h5 className="card-title card-title-custom">
                    <a className="text-warning" href={article.web_url} target="_blank" rel="noopener noreferrer">
                      {article.headline.main}
                    </a>
                  </h5>
                  <p className="card-text text-secondary">{article.abstract}</p>
                  <button onClick={() => saveArticle(article)} className={`btn ${savedArticles.some((a) => a._id === article._id) ? "btn-danger" : "btn-warning"}`}>
                    {savedArticles.some((a) => a._id === article._id) ? "Unsave" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Covid19;
