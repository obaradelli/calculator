import { useState } from "react";
import { DivGeral } from "./styles";

type Operador = "%" | "÷" | "x" | "-" | "+" | "";

export function Calculadora() {
  const [preNumber1, setpreNumber1] = useState<string>("");
  const [preNumber2, setpreNumber2] = useState<string>("");

  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  const [operador, setOperador] = useState<Operador>("");

  function porcentagem(num1: number, num2: number): number {
    const calculo = (num1 * num2) / 100;

    return calculo;
  }
  function adicao(num1: number, num2: number): number {
    const calculo = num1 + num2;

    return calculo;
  }
  function menos(num1: number, num2: number): number {
    const calculo = num1 - num2;

    return calculo;
  }
  function vezes(num1: number, num2: number): number {
    const calculo = num1 * num2;

    return calculo;
  }
  function dividir(num1: number, num2: number): number {
    const calculo = num1 / num2;

    return calculo;
  }

  function calculate(num1: number, num2: number, operator: Operador) {
    const resultElement = document.getElementById("result");

    switch (operator) {
      case "%":
        const result1 = porcentagem(num1, num2);
        if (resultElement != null) resultElement.innerHTML = `${result1}`;
        break;
      case "+":
        const result2 = adicao(num1, num2);
        if (resultElement != null) resultElement.innerHTML = `${result2}`;
        break;
      case "-":
        const result3 = menos(num1, num2);
        if (resultElement != null) resultElement.innerHTML = `${result3}`;
        break;
      case "x":
        const result4 = vezes(num1, num2);
        if (resultElement != null) resultElement.innerHTML = `${result4}`;
        break;
      case "÷":
        const result5 = dividir(num1, num2);
        if (resultElement != null) resultElement.innerHTML = `${result5}`;
        break;
    }
  }

  function saveAndCalulate() {
    calculate(number1, Number(preNumber2), operador);
  }

  return (
    <DivGeral>
      <div className="calculadora">
        <div className="visor">
          <div className="operacao-atual">
            <span
              style={{ height: "28px" }}
            >{`${preNumber1} ${operador} ${preNumber2}`}</span>
          </div>
          <div className="resultado-operacao">
            <span className="igual">=</span>
            <span className="resultado" id="result"></span>
          </div>
        </div>
        <div className="teclas">
          <div className="teclas-column">
            <button
              className="button-tecla"
              style={{ color: "#975DFA" }}
              onClick={() => {
                {
                  operador === ""
                    ? setpreNumber1("")
                    : setpreNumber1(preNumber1);
                }
                {
                  preNumber2 ? setOperador(operador) : setOperador("");
                }
                {
                  operador ? setpreNumber2("") : setpreNumber2(preNumber2);
                }
                const resultElement = document.getElementById("result");
                if (resultElement != null) resultElement.innerHTML = ``;
              }}
            >
              CE
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + "7")
                  : setpreNumber2(`${preNumber2}` + "7");
              }}
            >
              7
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + "4")
                  : setpreNumber2(`${preNumber2}` + "4");
              }}
            >
              4
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + "1")
                  : setpreNumber2(`${preNumber2}` + "1");
              }}
            >
              1
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                {
                  operador === ""
                    ? preNumber1.includes("-")
                      ? setpreNumber1(preNumber1.replace("-", ""))
                      : setpreNumber1(`-${preNumber1}`)
                    : preNumber2.includes("-")
                    ? setpreNumber2(preNumber2.replace("-", ""))
                    : setpreNumber2(`-${preNumber2}`);
                }
              }}
            >
              +/-
            </button>
          </div>
          <div className="teclas-column">
            <button
              className="button-tecla --padrao"
              onClick={() => {
                setpreNumber1(""),
                  setpreNumber2(""),
                  setOperador(""),
                  setNumber1(0),
                  setNumber2(0);
                const resultElement = document.getElementById("result");
                if (resultElement != null) resultElement.innerHTML = ``;
              }}
            >
              C
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + "8")
                  : setpreNumber2(`${preNumber2}` + "8");
              }}
            >
              8
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + "5")
                  : setpreNumber2(`${preNumber2}` + "5");
              }}
            >
              5
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + "2")
                  : setpreNumber2(`${preNumber2}` + "2");
              }}
            >
              2
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + "0")
                  : setpreNumber2(`${preNumber2}` + "0");
              }}
            >
              0
            </button>
          </div>
          <div className="teclas-column">
            <button
              className="button-tecla --padrao"
              onClick={() => {
                setOperador("%"), setNumber1(Number(preNumber1));
              }}
            >
              %
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + "9")
                  : setpreNumber2(`${preNumber2}` + "9");
              }}
            >
              9
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + "6")
                  : setpreNumber2(`${preNumber2}` + "6");
              }}
            >
              6
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + "3")
                  : setpreNumber2(`${preNumber2}` + "3");
              }}
            >
              3
            </button>
            <button
              className="button-tecla --padrao"
              onClick={() => {
                operador === ""
                  ? setpreNumber1(`${preNumber1}` + ".")
                  : setpreNumber2(`${preNumber2}` + ".");
              }}
            >
              .
            </button>
          </div>
          <div className="teclas-column">
            <button
              className="button-tecla--purple --padrao"
              style={{ fontSize: "30px" }}
              onClick={() => {
                setOperador("÷"), setNumber1(Number(preNumber1));
              }}
            >
              ÷
            </button>
            <button
              className="button-tecla--purple --padrao"
              onClick={() => {
                setOperador("x"), setNumber1(Number(preNumber1));
              }}
            >
              x
            </button>
            <button
              className="button-tecla--purple --padrao"
              onClick={() => {
                setOperador("-"), setNumber1(Number(preNumber1));
              }}
            >
              -
            </button>
            <button
              className="button-tecla--purple --padrao"
              onClick={() => {
                setOperador("+"), setNumber1(Number(preNumber1));
              }}
            >
              +
            </button>
            <button
              className="button-tecla--light-purple --padrao"
              onClick={() => {
                saveAndCalulate();
              }}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </DivGeral>
  );
}
