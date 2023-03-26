import React from "react";

function ArticlePreview(props) {
  function handleSelected() {
    props.handleClick(props.article);
  }
  const d = new Date(props.article.UploadDateTime);
  const formattedDate = d.toLocaleDateString("en-uk", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div onClick={handleSelected} className="article-preview-container">
      <h3>{props.article.Title}</h3>
      <div className="preview-text">
        <p className="italic">{props.article.Copy.slice(0, 100)}...</p>
      </div>
      <div className="preview-img">
        <img
          style={{ width: "200px" }}
          src={props.article.Image}
          alt={"article " + props.article.ID + " image"}
        ></img>
      </div>
      <p>{formattedDate}</p>
    </div>
  );
}

export default ArticlePreview;
