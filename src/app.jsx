import './app.css'
import React from 'react'
import Card from './components/layout/Card'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragment'
import Ramdom from './components/basics/Random'


export default () =>
(
    <div className="app">
        <h1>Fundamentos React</h1>

        <div className="cards">

        <Card title="Desafio numero randômico">
            <Ramdom
                min={10}
                max={30} />
        </Card>

        <Card title="Fragmento">
            <Fragmento></Fragmento>
        </Card>

        <Card title="situacao do Aluno">
            <ComParametro
                titulo="Situacao do Aluno"
                aluno="Luiz"
                nota={6.2}
            />
        </Card>

        <Card title="First component">
            <Primeiro></Primeiro>
        </Card>

    </div>

</div >
);
