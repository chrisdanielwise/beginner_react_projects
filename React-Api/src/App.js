import React, { useState, useEffect } from "react";
import "./App.css";
import ApiData from "./ApiData";

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    ApiFiles()
  }, []);

  const ApiFiles = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const responseData = await response.json();
    setApiData(responseData);
    console.log(responseData)
  };
  return (
    <>
      <h1 className="text-center my-5">Basic React Api</h1>
      <ApiData apiData={apiData} />
    </>
  );
}

export default App;
