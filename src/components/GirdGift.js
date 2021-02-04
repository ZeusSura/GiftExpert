import React,{} from "react";
import GridGiftItem from "./GridGiftItem";

import PropTypes from "prop-types";
import { useFetchGift } from "../hooks/useFecthGift";

const GridGift = ({ categoria }) => {
  const {data,loading} =  useFetchGift(categoria)
  

  return (
    <>
      {loading&&<p>cargando...</p>}
      <h3>{categoria}</h3>
      <div className="contenedor-imagen">
      {data.map((img) => {
        return (
        <GridGiftItem
        key={img.id}
        imagen={img}
        />
        );
      })}
      </div> 
    </>
  );
};

GridGift.propTypes = {
  categoria: PropTypes.string.isRequired
};

export default GridGift;
