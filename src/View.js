import React from 'react'
import './style/View.css';

const View=(po)=> {
    const{id,name,sprite,type}=po;
    return (
        <section className="detail-view">
            <img  src={sprite} className='sprite-image' alt="sprite"/>
            <div className='data-wrapper'>
                <h1 className='data-name'> ID : {id} {name} </h1>
                <p className='data-char'> Type : {type}</p>
            </div>
            
        </section>
    )
}

export default View;
