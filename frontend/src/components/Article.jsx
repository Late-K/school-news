import React from "react";
import "../App.css";

function Article(props) {
  const d = new Date(props.article.UploadDateTime);
  const formattedDate = d.toLocaleDateString("en-uk", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const paragraphArray = props.article.Copy.split(/\r?\n/);
  function handleClick() {
    props.setPage("home");
  }
  return (
    <div className="article-container">
      <button onClick={handleClick}>Back</button>
      <h2>{props.article.Title}</h2>
      <img
        style={{ width: "100%" }}
        src={props.article.Image}
        alt={"article " + props.article.ID + " image"}
      ></img>
      {paragraphArray.map((paragraph) => {
        return <p>{paragraph}</p>;
      })}
      <p>
        {props.article.FirstName} {props.article.LastName}
      </p>
      <p> {formattedDate}</p>
    </div>
  );
}

export default Article;
