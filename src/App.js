import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://kitsu.io/api/edge/anime`);
      setData(request.data.data);
      return request;
    }
    fetchData();
  }, []);

  console.log(data); //
  return (
    <div className="app">
      <h1>Chen's Anime List</h1>
      {data.map(
        ({ id, attributes: { canonicalTitle, coverImage, status } }) =>
          coverImage && (
            <div key={id} className="box">
              <h2>
                {canonicalTitle} <span>({status})</span>
              </h2>

              <img src={coverImage?.tiny} alt="" />
            </div>
          )
      )}
    </div>
  );
}

export default App;
