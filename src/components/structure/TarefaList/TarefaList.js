import React, { useEffect, useState } from 'react';
import TarefaCard from '../TarefaCard/TarefaCard';
import './TarefaList.scss';
import { Api } from '../../../api/api';

const TarefaList = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(()=> {
    getTarefa();
  }, [])

  const getTarefa = async () => {
   
    const response = await Api.fetchGet();
   
    const data = await response.json();
    setTarefas(data);
  }

  return (
    <div className="list">
      {tarefas.map((tarefa, index) => (
        <TarefaCard tarefas={tarefa} key={tarefa._id}/>
      ))}
    </div>
  )
}

export default TarefaList