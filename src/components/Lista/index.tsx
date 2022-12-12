import React from "react";
import Item from './Item';
import style from './Lista.module.scss';

function Lista() {
  const tarefas =[{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'Javascript',
    tempo: '01:00:00'
  }, {
    tarefa: 'Typescript',
    tempo: '03:00:00'
  }]
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do Dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
          // Não é necessário tipar o item, o react permite colocar o key sem a tipagem (ele não é usado no componente)
            key={index}
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
