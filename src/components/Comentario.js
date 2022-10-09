import React from 'react';
import './Comentario.css'


//JSX
const Comentario = props => {
 
 return   <div className='Comentario'>
    <p>{props.nome}</p>
    <p>{props.email}</p>
    
    <p>{props.data.toString()}</p>
    <p><i>{props.children}</i></p>
    <button onClick={props.onRemove}>&times;</button>
    </div>
};


export default Comentario