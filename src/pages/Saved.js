import React from "react";
import "./Indonesia.css";

function Saved({ savedArticles, saveArticle }) {
  return (
    <div className="indonesia-page">
      <h2 className="text-center mb-4 text-light">Saved Articles</h2>
      <div className="container">
        {savedArticles.length === 0 ? (
          <p className="text-center mb-4 text-light">No articles saved yet.</p>
        ) : (
          <div className="row g-4">
            {savedArticles.map((article) => (
              <div key={article._id} className="col-md-4">
                <div className="card card-custom h-100 bg-dark">
                  <div className="card-body">
                    <h5 className="card-title card-title-custom">
                      <a href={article.web_url} target="_blank" rel="noopener noreferrer">
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
        )}
      </div>
    </div>
  );
}

export default Saved;
