import React from 'react'

export default (props) => {
    const min = props.min
    const max = props.max
    const random = parseInt(Math.random() * (max - min) ) + min
   return(
       <div>
           <h2>Valor randômico entre <strong>{min}</strong> e <strong>{max}</strong></h2>
           <strong>Valor sorteado = {random}</strong>
       </div>
   )
}

   


    

    
