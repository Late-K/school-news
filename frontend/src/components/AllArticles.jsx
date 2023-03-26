import React, { useState } from "react";
import ArticlePreview from "./ArticlePreview";
import "../App.css";
import Search from "./Search";

function AllArticles(props) {
  const [refresh, setRefresh] = useState(false);
  function handleClick(article) {
    props.setSelectedArticle(article);
    props.setPage("Article");
  }
  if (refresh) {
    setRefresh(false);
  } else {
    return (
      <div>
        <h2 className="centred-text">Articles</h2>
        <Search
          articles={props.allArticles}
          setArticles={props.setArticles}
          setRefresh={setRefresh}
        />
        {props.articles.map((article) => {
          return <ArticlePreview article={article} handleClick={handleClick} />;
        })}
      </div>
    );
  }
}

export default AllArticles;
