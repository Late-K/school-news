import React from "react";
import ArticlePreview from "./ArticlePreview";

function AllArticles(props) {
  function handleClick(article) {
    props.setSelectedArticle(article);
    props.setPage("Article");
  }
  return (
    <div>
      <h2>Recent Articles</h2>{" "}
      {props.articles.map((article) => {
        return <ArticlePreview article={article} handleClick={handleClick} />;
      })}
    </div>
  );
}

export default AllArticles;
