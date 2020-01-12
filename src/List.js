import React from 'react';
import Cell from './Cell';
import {pokeClasses} from './pokeClasses';
import "./style/List.css";

const List=({handleOnClick})=> {
    const c=pokeClasses.map(pokeClass =>{
    return (
        <Cell 
        key={pokeClass.id}
        pokeClass={pokeClass}
        handleOnClick={handleOnClick}
        />
    );
    });
    return (
        <section className="poke-list">
            {c} 
        </section>
        
    )
}

export default List;