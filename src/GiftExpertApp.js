import React, { useState } from "react";
import CategoryAdd from "./components/CategoryAdd";

const GiftExpertApp = () => {
  const [categorias, setCategorias] = useState([
    "one punch",
    "samurai x",
    "Dragon Ball",
  ]);


  return (
    <>
      <h2>GiftExpertApp</h2>
      <CategoryAdd/>
      <hr />
      <ol>
        {categorias.map((categoria) => (
          <li key={categoria}>{categoria}</li>
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
