import React from 'react';

const MarqueeComponent = ({ src, title }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    minWidth: "max-content",
    padding: "0 10px",
  };

  const imgStyle = {
    width: "20px",
    height: "20px",
  };

  return (
    <div style={style}>
      <img src={src} alt="icon" style={imgStyle} />
      <p style={{ margin: 0 }}>{title}</p>
    </div>
  );
};

export default MarqueeComponent;
