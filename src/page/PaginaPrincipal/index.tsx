import { useState } from "react";
import { DivGeral } from "./styles";

export function Calculadora() {
  return (
    <DivGeral>
      <div className="calculadora">
        <div className="visor">
          <div className="operacao-atual">
            <span>{`1+1`}</span>
          </div>
          <div className="resultado-operacao">
            <span className="igual">=</span>
            <span className="resultado">2</span>
          </div>
        </div>
        <div className="teclas">
          <div className="teclas-column">
            <button className="button-tecla" style={{ color: "#975DFA" }}>
              CE
            </button>
            <button className="button-tecla --padrao">1</button>
            <button className="button-tecla --padrao">4</button>
            <button className="button-tecla --padrao">1</button>
            <button className="button-tecla --padrao">+/-</button>
          </div>
          <div className="teclas-column">
            <button className="button-tecla --padrao">C</button>
            <button className="button-tecla --padrao">8</button>
            <button className="button-tecla --padrao">5</button>
            <button className="button-tecla --padrao">2</button>
            <button className="button-tecla --padrao">0</button>
          </div>
          <div className="teclas-column">
            <button className="button-tecla --padrao">%</button>
            <button className="button-tecla --padrao">9</button>
            <button className="button-tecla --padrao">6</button>
            <button className="button-tecla --padrao">3</button>
            <button className="button-tecla --padrao">,</button>
          </div>
          <div className="teclas-column">
            <button
              className="button-tecla--purple --padrao"
              style={{ fontSize: "30px" }}
            >
              ÷
            </button>
            <button className="button-tecla--purple --padrao">x</button>
            <button className="button-tecla--purple --padrao">-</button>
            <button className="button-tecla--purple --padrao">+</button>
            <button className="button-tecla--light-purple --padrao">=</button>
          </div>
        </div>
      </div>
    </DivGeral>
  );
}
