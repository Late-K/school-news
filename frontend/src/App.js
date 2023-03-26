import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllArticles from "./components/AllArticles";
import Article from "./components/Article";
import Search from "./components/Search";

function App() {
  const [res, setRes] = useState("");
  const [displayedArticles, setDisplayedArticles] = useState("");
  const [selectedArticle, setSelectedArticle] = useState("");
  const [page, setPage] = useState("home");

  useEffect(() => {
    axios.get("http://localhost:5000/getAllArticles").then((response) => {
      console.log(response.data);
      setRes(response.data);
      setDisplayedArticles(response.data);
    });
  }, []);

  if (res) {
    return (
      <div className="App">
        <Header />

        <div className="center">
          {page === "home" ? (
            <AllArticles
              allArticles={res}
              setArticles={setDisplayedArticles}
              articles={displayedArticles}
              setSelectedArticle={setSelectedArticle}
              setPage={setPage}
            />
          ) : (
            <Article article={selectedArticle} setPage={setPage} />
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
