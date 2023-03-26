import React, { useState } from "react";
import "../App.css";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function oldestPressed() {
    let sortedArray = props.articles.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.UploadDateTime) - new Date(b.UploadDateTime);
    });
    props.setArticles(sortedArray);
    props.setRefresh(true);
  }

  function newestPressed() {
    let sortedArray = props.articles.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.UploadDateTime) - new Date(a.UploadDateTime);
    });
    props.setArticles(sortedArray);
    props.setRefresh(true);
  }

  function searchPressed(event) {
    event.preventDefault();
    let searchedArticles = props.articles.filter(function (name) {
      return name.Title.toUpperCase().match(searchTerm.toUpperCase());
    });

    props.setArticles(searchedArticles);
  }
  return (
    <div className="search-container">
      <form className="centred-text">
        <input onChange={handleChange}></input>{" "}
        <button onClick={searchPressed}>search</button>
      </form>
      <div className="centred-text filter-container">
        <button onClick={newestPressed}>Newest First</button>
        <button onClick={oldestPressed}>Oldest First</button>
      </div>
    </div>
  );
}

export default Search;
