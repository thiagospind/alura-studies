import React from "react";

export function Relogio() {
  return(
    // <React.Fragment> é uma forma de "burlar" o comportamento padrão do jsx que é baseado no xml
    // e por isso, pede um elemento pai (div, section).
    // Também pode ser usado <>, que é a mesma coisa que <React.Fragment>
    <React.Fragment>
      <span>0</span>
      <span>0</span>
      <span>:</span>
      <span>0</span>
      <span>0</span>
    </React.Fragment>
  )
}