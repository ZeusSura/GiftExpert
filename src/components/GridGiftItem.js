import React from "react";

const GridGiftItem = ({ imagen }) => {
  const { url, title } = imagen;
  return (
    <div className="animate__animated animate__rotateIn animate__slower animate__infinite">
      <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default GridGiftItem;
