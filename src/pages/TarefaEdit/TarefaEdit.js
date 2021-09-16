import React, { useEffect, useState } from "react";
import { Api } from '../../api/api';

const TarefaEdit = (props) => {
  const id = props.match.params.id;
  const [fields, setFields] = useState({});

  useEffect(() => {
    getTarefaById();
  },[])

  const getTarefaById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setFields(data);
  }

  const handleFieldsChange = (evento) => {
    const auxFields = { ...fields };
    auxFields[evento.target.name] = evento.target.value;
    setFields(auxFields);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const dados = { ...fields };
    dados.duracao = parseFloat(dados.duracao);
    const result = await Api.fetchPut(dados, id);
    const response = await result.json();
    console.log(response);
  }

  return (
    <section className="add">
      <h1>Editar - Tarefa </h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form-group">
          <label htmlFor="tarefa" className="add-form-group-label">
            Tarefa
          </label>
          <input
            type="text"
            id="tarefa"
            name="tarefa"
            value={fields.tarefa}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="importancia" className="add-form-group-label">
            Importancia
          </label>
          <input
            type="text"
            id="importancia"
            name="importancia"
            value={fields.importancia}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="genero" className="add-form-group-label">
            Genero
          </label>
          <input
            type="text"
            id="genero"
            name="genero"
            value={fields.genero}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="capa" className="add-form-group-label">
            Prioridade
          </label>
          <input
            type="text"
            id="prioridade"
            name="prioridade"
            value={fields.prioridade}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-buttons">
          <button className="add-form-buttons-btn-cancelar">Cancelar</button>
          <button className="add-form-buttons-btn-salvar" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default TarefaEdit;