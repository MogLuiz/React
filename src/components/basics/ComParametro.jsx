import React from 'react'

export default function ComParametro(props){
    const status = props.nota >= 6 ? 'Aproved' : 'Reproved'
    return (
    <div>
        <h2> { props.titulo } </h2>
        <p> 
            <strong >{ props.aluno } </strong> 
             teve a nota 
            <strong> { props.nota } </strong>
             Logo , { props.aluno }   
             Foi 
              <strong> {  status  } </strong>
        </p>
    </div>
    )
}