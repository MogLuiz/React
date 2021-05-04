import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {

    function getLinhas(){
        return produtos.map((produto , i) => {
            return(
                <tr key="{produto.id}">
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.Preco.toFixed(2).replace('.' , ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table border="1">
               <thead>
                   <tr>
                       <th>Id</th>
                       <th>Nome</th>
                       <th>Preço</th>
                   </tr>
               </thead>
               <tbody>              
                       {getLinhas()}                 
               </tbody>
            </table>
        </div>
    )
}