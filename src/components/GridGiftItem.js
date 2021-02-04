import React from "react";
import PropTypes from 'prop-types'
const GridGiftItem = ({ imagen }) => {
  const { url, title } = imagen;
  return (
    <div className="animate__animated animate__rotateIn animate__slower">
      <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
};
GridGiftItem.propTypes={
   imagen:PropTypes.object.isRequired
}
export default GridGiftItem;
