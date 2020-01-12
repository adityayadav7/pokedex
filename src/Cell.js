import React from 'react';
import sprites from './image/sprites.png';
import './style/Cell.css';
//const pokeClass=undefined;
const Cell=({pokeClass,handleOnClick})=> {
    //onst pokeClass="default";
    const {id,backgroundPosition }=pokeClass;
    const style={backgroundImage: `url(${sprites})`,backgroundPosition };
    return <button onClick={()=> handleOnClick(id)} style={style} className="poke-cell"/>
}

export default Cell;
