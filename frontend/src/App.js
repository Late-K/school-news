import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [res, setRes] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/test").then((response) => {
      console.log(response.data);
      setRes(response.data);
    });
  }, []);

  if (res) {
    return (
      <div className="App">
        <header className="App-header">
          <p>{res[0].Title}</p>
          <p>{res[0].Copy}</p>
        </header>
      </div>
    );
  }
}

export default App;
