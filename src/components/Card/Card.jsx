import React from 'react';
import { useHistory } from "react-router-dom";


export default function Card({ title, desc, date, img,id}) {
    const history = useHistory();

    const handleClick = () => {
        // Kartın idsine göre yönlendirme yap
        history.push(`/cards/${id}`);
      };
  return (
    <div className="card-group d-flex align-items-stretch h-100">
      <div className="card">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title" onClick={handleClick}>{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-muted">{date}</small>
          </p>
        </div>
      </div>
    </div>
  );
}
