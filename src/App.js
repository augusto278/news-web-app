import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Indonesia from "./pages/Indonesia";
import Programming from "./pages/Programming";
import Covid19 from "./pages/Covid19";
import Saved from "./pages/Saved";
import Navbar from "./pages/Navbar";
import Search from "./pages/Search";

const App = () => {
  const [savedArticles, setSavedArticles] = useState([]);
  

  const saveArticle = (article) => {
    const isSaved = savedArticles.some((a) => a._id === article._id);
    if (isSaved) {
      setSavedArticles(savedArticles.filter((a) => a._id !== article._id));
    } else {
      setSavedArticles([...savedArticles, article]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Indonesia saveArticle={saveArticle} savedArticles={savedArticles} />} />
        <Route path="/programming" element={<Programming saveArticle={saveArticle} savedArticles={savedArticles} />} />
        <Route path="/covid19" element={<Covid19 saveArticle={saveArticle} savedArticles={savedArticles} />} />
        <Route path="/saved" element={<Saved savedArticles={savedArticles} saveArticle={saveArticle} />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </Router>
  );
};

export default App;
