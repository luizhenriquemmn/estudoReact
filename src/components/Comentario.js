import React from 'react';
import './Comentario.css'


//JSX
const Comentario = a => {
 
 return   <div className='Comentario'>
    <p>{a.nome}</p>
    <p>{a.email}</p>
    
    <p>{a.data.toString()}</p>
    <p><i>{a.children}</i></p>

    </div>
};


export default Comentario