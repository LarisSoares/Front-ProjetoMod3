import React from 'react';
import TarefaList from '../../components/structure/TarefaList/TarefaList';
import './Home.scss';

const Home = () => {
  return (
    <section className="content">
      <h1 className="content-title">Listagem de Tarefas</h1>
      <div className="content-list">
        <h1>Projeto de Tarefas</h1>
        <TarefaList />
      </div>
    </section>
  )
}

export default Home