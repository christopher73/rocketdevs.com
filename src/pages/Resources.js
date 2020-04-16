import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollUp from "../components/ScrollUp/ScrollUp";
import Logo from "../components/Logo/Logo";

export default function Resources() {
  const [news, setNews] = useState([]);
  const api = "https://hn.algolia.com/api/v1/search_by_date?tags=story";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(api);
        setNews([...news, ...response.data.hits]);
        //return response;
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // console.log(news);
  return (
    <div style={{ backgroundColor: "white" }}>
      <ScrollUp />
      <Logo />
      <div className="whoweare-div">
        <h3 className="about-me-left-title">Resources</h3>
        <br />
        <h3
          style={{
            textTransform: "none",
            fontSize: "1rem",
            backgroundColor: "#ff742b",
            marginTop: "10px",
          }}
          className="about-me-left-title"
        >
          by : Search Hacker News API
        </h3>
        {news.map((elem, i) => (
          <div key={i}>
            <h5 style={{ marginBottom: "1px" }}>> {elem.title} </h5>
            <a
              href={elem.url}
              target="_black"
              style={{
                color: "#ef0d33",
                fontSize: ".7rem",
                textDecoration: "none",
              }}
            >
              {"  <Story Link>"}
            </a>
            <p
              style={{
                marginTop: "1px",
                fontSize: "small",
                textTransform: "capitalize",
              }}
            >
              by : {elem.author}
              <br /> date: {elem.created_at.split("T")[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
