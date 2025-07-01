import React from "react";
import "./loading.scss";

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="loading-text">Đang tải...</div>
      </div>
    </div>
  );
};

export default Loading;
