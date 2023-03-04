import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [res, setRes] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/test").then((response) => {
      setRes(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{res}</p>
      </header>
    </div>
  );
}

export default App;
