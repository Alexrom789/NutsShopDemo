import React from 'react';
import './Card.css';

const Card = (props) => {
  const {title, imageUrl, index, openModalHandler} = props;
  return(
    <div className="card-background">
    <img alt='product' src={imageUrl} onClick={()=>{props.openModalHandler(index)}} />
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;