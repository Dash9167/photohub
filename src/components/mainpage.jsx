import React, { useState } from "react";
import "../css/main.css";
import bg from "../assets/travel2.mp4";
import Resultpage from "./resultpage";

const Mainpage = () => {
  const [search, setsearch] = useState("");
  const [validation, setvalidation] = useState(false);

  const [submit, setsubmit] = useState("nature");

  const openImg = () => {
    if (search === "") {
      setvalidation(true);
    } else {
      setsubmit(search);
    }
  };

  return (
    <>
      <div className="main" id="redirect">
        <div className="videoimg">
          <video autoPlay muted loop>
            <source src={bg} />
          </video>
        </div>
        <div className="form">
          <input
            type="text"
            onChange={(e) => setsearch(e.target.value)}
            value={search}
            placeholder="Search anything"
          />

          <i className="fa-solid fa-magnifying-glass"></i>
          <button type="submit" onClick={openImg}>
            search
          </button>
          {validation ? alert("Search Box can't Empty") : ""}
        </div>
      </div>
      <Resultpage searchtype={submit} />
    </>
  );
};

export default Mainpage;
