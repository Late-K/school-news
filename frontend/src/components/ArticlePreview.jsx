import React from "react";

function ArticlePreview(props) {
  function handleSelected() {
    props.handleClick(props.article);
  }
  return (
    <div onClick={handleSelected} className="articlePreviewContainer">
      <p>{props.article.Title}</p>
      <img
        style={{ width: "100px" }}
        src={props.article.Image}
        alt={"article " + props.article.ID + " image"}
      ></img>
    </div>
  );
}

export default ArticlePreview;
