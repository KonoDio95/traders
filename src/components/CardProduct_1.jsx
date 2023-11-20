import React from 'react';

const CardProduct_1 = (props) => {
  let id = props.id;
  let i_src = props.src;
  let name = props.name;
  let price = props.price;
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={`${i_src}`} className="" alt={`${name}`} style={{ height: '250px', width: 'auto' }} />
      <div className="card-body text-center">
        <h5 className="card-title">R$ {price}</h5>
        <p className="card-text">
          {name}
        </p>
        <a href={`/produto/${id}`} className="btn btn-primary w-100">
          Ver
        </a>
      </div>
    </div>
  )
}
export default CardProduct_1