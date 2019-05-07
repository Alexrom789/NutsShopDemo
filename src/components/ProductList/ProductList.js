import React from 'react';
import Card from '../Card/Card';
import './ProductList.css';

const ProductList = (props) => {

  let renderImage = (idx) => {
    if (!props.items[idx].masterData.current.masterVariant.images[0]) {
      return 'https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE.jpg';
    }
    return props.items[idx].masterData.current.masterVariant.images[0].url;
  }

  const itemsArray = props.items.map((itm, idx) => {
    return (
      <Card 
        key={idx} 
        index={idx}
        title={props.items[idx].masterData.current.name.en}
        imageUrl={renderImage(idx)}
        openModalHandler={props.openModalHandler}/> )
  })
  return (
    <div className="ProductList">
      {itemsArray}
    </div>
  );
}

export default ProductList;