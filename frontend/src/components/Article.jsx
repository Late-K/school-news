import React from "react";

function Article(props) {
  function handleClick() {
    props.setPage("home");
  }
  return (
    <div className="articlePreviewContainer">
      <button onClick={handleClick}>Back</button>
      <h2>{props.article.Title}</h2>
      <img
        style={{ width: "100px" }}
        src={props.article.Image}
        alt={"article " + props.article.ID + " image"}
      ></img>
      <p>{props.article.Copy}</p>
      <p>
        {props.FirstName} {props.LastName}
      </p>
    </div>
  );
}

export default Article;
