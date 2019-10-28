import React from "react";

function Quoteapi({ simpson }) {
  return (
    <div>
      <h1>{simpson.character}</h1>
      <img src={simpson.image} alt={simpson.character}></img>
      <p>{simpson.quote}</p>
    </div>
  );
}

export default Quoteapi;
