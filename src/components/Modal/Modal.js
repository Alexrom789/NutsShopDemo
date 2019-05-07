import React from 'react';
import './Modal.css';

const Modal = ({ closeModalHandler, show, content }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    let renderPrice= () => {
        if (!content.masterData.current.masterVariant.prices[0]) {
            return 'N/A';
          }
          return (content.masterData.current.masterVariant.prices[0].value.centAmount) / 100;
    }
    
    if (content != null) {
        let imageArr = content.masterData.current.masterVariant.images.map((img, idx) => {
            return (
            <img alt='product' src={img.url} key={idx}/> 
            )
        })
        return (
            <div className={showHideClassName}>
              <section className="modal-main">
                {imageArr}
                <h1>{content.masterData.current.name.en}</h1>
                <p>{`Price: $${renderPrice()}`}</p>
                <p>{`Description: ${content.masterData.current.description.en}`}</p>
                {content.masterData.current.masterVariant.attributes[1].value === true && <div className="organicLogo"><img alt='organic' src={'https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/5e85d71501308335-L2AE6hCf-thumb.jpg'}/></div>}
                <button onClick={closeModalHandler}>close</button>
              </section>
            </div>
          );
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <h1>Loading..</h1>
          <button onClick={closeModalHandler}>close</button>
        </section>
      </div>
    );
  };

export default Modal;