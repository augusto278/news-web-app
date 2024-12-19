import React from "react";

function ArticleCard({ article, saveArticle, isSaved }) {
  return (
    <div className="col-md-4">
      <div className="card card-custom h-100 bg-dark">
        <div className="card-body">
          <h5 className="card-title card-title-custom">
            <a className="text-warning" href={article.web_url} target="_blank" rel="noopener noreferrer">
              {article.headline.main}
            </a>
          </h5>
          <p className="card-text text-secondary">{article.abstract}</p>
          <button onClick={() => saveArticle(article)} className={`btn ${isSaved ? "btn-danger" : "btn-warning"}`}>
            {isSaved ? "Unsave" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
