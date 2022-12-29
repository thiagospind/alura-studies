import React, {useState} from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Cronometro from '../Cronometro';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
// useState() -> Hook usado pra sinalizar a mudança de 
// estado e com isso, renderizar o componente 
// a cada mudança nos dados, isso no  caso de function component.
const [tarefas, setTarefas] = useState<ITarefa[]>([])
const [selecionado, setSelecionado] = useState<ITarefa>();

function selecionaTarefa(tarefaSelecionada: ITarefa) {
  setSelecionado(tarefaSelecionada);
  setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
    ...tarefa,
    selecionado: tarefa.id === tarefaSelecionada.id ? true : false
  })));
}
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
        

      />
      <Cronometro />
    </div>
  );
}

export default App;
