import React from 'react';
import { Link } from "react-router-dom";

export default function Card({ title, desc, date, img,id}) {

  return (
    <div className="card-group d-flex align-items-stretch h-100">
      <div className="card">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/blog/${id}`} className='text-decoration-none text-dark'>{title}</Link>
          </h5>
          <p className="card-text text-overflow">{desc}</p>
          <p className="card-text">
            <small className="text-muted">{date}</small>
          </p>
        </div>
      </div>
    </div>
  );
}
