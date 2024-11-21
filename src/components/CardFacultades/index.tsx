import React from "react";

interface CardProps {
  title: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, link }) => {
  return (
    <div className="col-md-3 mb-3" >
      <a
        href={link}
        className="card"
        style={{
          textDecoration: "none",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#c1d9d4",
          borderColor: "#c1d9d4"
        }}
      >
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
        </div>
      </a>
    </div>
  );
};

export default Card;
