import React, { useState } from "react";
import CategoryAdd from "./components/CategoryAdd";
import GridGift from "./components/GirdGift";
import shortid from "shortid";
const GiftExpertApp = ({defaultCategories =[]}) => {
  const [categorias, setCategorias] = useState(defaultCategories);

  return (
    <>
      <h2>GiftExpertApp</h2>
      <CategoryAdd setCategorias={setCategorias} />
      <hr />
      {categorias.map((categoria) => (
        <GridGift key={shortid.generate()} categoria={categoria} />
      ))}
    </>
  );
};

export default GiftExpertApp;
