import './app.css'
import React from 'react'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragment'
import Ramdom from './components/basics/Random'
import FamiliaMembro from './components/basics/FamiliaMembro'


export default () =>
(
<div className="app">
        <h1>Fundamentos React</h1>

    <div className="cards">

        <Card title="Componente com filhos" color="#28ABE3">
            <Familia sobrenome="Matos">
                <FamiliaMembro nome="Pedro" />
                <FamiliaMembro nome="Ana"  />
                <FamiliaMembro nome="Gustavo" />
            </Familia>
        </Card>

        <Card title="Desafio Aleatório" color="#28ABE3">
            <Ramdom
                min={10}
                max={30} />
        </Card>

        <Card title="Fragmento" color="#28ABE3">
            <Fragmento></Fragmento>
        </Card>

        <Card title="situacao do Aluno" color="#28ABE3">
            <ComParametro
                titulo="Situacao do Aluno"
                aluno="Luiz"
                nota={6.2}
            />
        </Card>

        <Card title="First component" color="#28ABE3">
            <Primeiro></Primeiro>
        </Card>

    </div>

</div >
);
