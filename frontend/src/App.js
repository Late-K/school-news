import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllArticles from "./components/AllArticles";
import Article from "./components/Article";

function App() {
  const [res, setRes] = useState("");
  const [selectedArticle, setSelectedArticle] = useState("");
  const [page, setPage] = useState("home");

  useEffect(() => {
    axios.get("http://localhost:5000/getAllArticles").then((response) => {
      console.log(response.data);
      setRes(response.data);
    });
  }, []);

  if (res) {
    return (
      <div className="App">
        <Header />
        {page === "home" ? (
          <AllArticles
            articles={res}
            setSelectedArticle={setSelectedArticle}
            setPage={setPage}
          />
        ) : (
          <Article article={selectedArticle} setPage={setPage} />
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
