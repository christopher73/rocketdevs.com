import React, { useEffect, useState } from "react";
import axios from "axios";
// useEffect(() => {
//   async function fetchData() {
//     // You can await here
//     const response = await MyAPI.getData(someId);
//     // ...
//   }
//   fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state
// headers: {
//   Accept: "application/json",
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "*",
// },

export default function Resources() {
  const [newsData, setNewsData] = useState({});
  const api = "https://hnrss.org/frontpage.jsonfeed";

  async function fetchData() {
    try {
      const response = await axios.get(api, {
        crossdomain: true,
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencoded",
        //   Host: "https://40ea41f5.ngrok.io",
        //   "Access-Control-Allow-Origin": "https://40ea41f5.ngrok.io",
        //   "Cache-Control": "no-cache",
        // },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
}
