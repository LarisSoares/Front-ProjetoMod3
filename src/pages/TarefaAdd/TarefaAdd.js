import React from 'react'
import './TArefaAdd.scss';
import { Api } from '../../api/api'

const TarefaAdd = (props) => {
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(evento.target.nome.value);
    const tarefa = evento.target.tarefa.value;
    const importancia = evento.target.importancia.value;
    const genero = evento.target.genero.value;
    const prioridade = evento.target.prioridade.value;
  
    const Tarefa = {
      tarefa: tarefa,
      importancia: importancia,
      genero: genero,
      prioridade: prioridade,
      
       }


    try {
      const response = await Api.fetchPost(Tarefa);
      const data = await response;
      props.history.push('/');
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form-group">
          <label htmlFor="nome" className="add-form-group-label">Tarefa</label>
          <input type="text" id="nome" name="nome" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="autor" className="add-form-group-label">Importancia</label>
          <input type="text" id="autor" name="autor" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="genero" className="add-form-group-label">Genero</label>
          <input type="text" id="genero" name="genero" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="capa" className="add-form-group-label">prioridade</label>
          <input type="text" id="capa" name="capa" className="add-form-group-input"/>
        </div>
        <div className="add-form-buttons">
          <button className="add-form-buttons-btn-cancelar">Cancelar</button>
          <button className="add-form-buttons-btn-salvar" type="submit">Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default TarefaAdd