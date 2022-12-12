import React from "react";
import style from './Relogio.module.scss';

export default function Relogio() {
  return(
    // <React.Fragment> é uma forma de "burlar" o comportamento padrão do jsx que é baseado no xml
    // e por isso, pede um elemento pai (div, section).
    // Também pode ser usado <>, que é a mesma coisa que <React.Fragment>
    <React.Fragment>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </React.Fragment>
  )
}