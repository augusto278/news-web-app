import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSearchQuery, fetchArticles } from '../redux/newsSlice';
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const { news, isLoading, error } = useSelector((state) => state.news);

  useEffect(() => {
    if (query) {
      dispatch(setSearchQuery(query));
      dispatch(fetchArticles(query));
    }
  }, [dispatch, query]);

  return (
    <div className="search-page">
      <h1 className="text-center mb-4 text-light">Search Results for "{query}"</h1>
      {isLoading && <div className="text-center mt-3">Loading...</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      <ul className="list-group mt-4">
        {news.length > 0 ? (
          news.map((article) => (
            <li key={article._id} className="list-group-item">
              <h5>{article.headline.main}</h5>
              <p>{article.snippet}</p>
              <a href={article.web_url} target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-sm">
                Read More
              </a>
            </li>
          ))
        ) : (
          !isLoading && <div className="text-center">No results found.</div>
        )}
      </ul>
    </div>
  );
};

export default Search;
