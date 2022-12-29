import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<{
  texto: string,
  // A interrogação antes diz que esse prop é opcional
  type?: "button" | "submit" | "reset" | undefined
}> {
  render() {
    const { type = "button"} = this.props
    return (
        <button type={type} className={style.botao}>
            {this.props.texto}
        </button>
    )
  }
}

export default Botao;
