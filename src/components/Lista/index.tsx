import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}


function Lista({ tarefas, selecionaTarefa }: Props) {

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do Dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
          // Não é necessário tipar o item, o react permite colocar o key sem a tipagem (ele não é usado no componente)
            key={item.id}
          // Utilização do operador spread (...) para desetruturar o objeto item, sem precisar passar um por um.
            {...item}

          // Forma alternativa:
          // tarefa = {item.tarefa}
          // tempo = {item.tempo}
          />
        ))}        
      </ul>
    </aside>
  );
}  

export default Lista;
