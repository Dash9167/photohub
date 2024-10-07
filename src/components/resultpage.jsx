import React, { useState, useEffect } from "react";
import "../css/page.css";
import Boxes from "./Boxes";

const Resultpage = ({ searchtype,valid }) => {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);


  useEffect(() => {
    const fetchdata = async () => {
      const apikey = "Tq3GcJINbdDj37hSTxCKPAZ3lMo1fqtgbrlZ8d2egOjoS3jFS5qJxZdK";
     try{
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchtype}&per_page=16&page=${page}`,
        {
          headers: {
            Authorization: apikey,
          },
        }
      );
      const value = await response.json();
      setdata(value.photos);
      setloading(false)
     }
     catch(error)
     {
        console.error("Error Found : ", error)
     }
      
    };
    if (searchtype) {
      fetchdata();
    }
  }, [searchtype, page]);
  const backpage = () => {
    setpage((prev) => prev + 1);
  };
  const forwardpage = () => {
    setpage((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div className="content">
     <center><h1>{valid}</h1></center>
      <div className="container" id="redirect">
       
      {loading ? <center><h1>Searching Images for <span>{searchtype}</span></h1></center>:""}
        {
          data.map((photo) => (
            <Boxes key={photo.id} src={photo.src.medium}/>
          ))
        }
      </div>
      <div className={loading?"buton-side gayab":"buton-side"} >
      <button onClick={forwardpage} disabled={page===1} href="#rediecrt">Back</button>
        <button onClick={backpage} href="#rediecrt">Next</button>
     
      </div>
    </div>
  );
};

export default Resultpage;
