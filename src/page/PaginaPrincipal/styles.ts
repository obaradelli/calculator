import styled from "styled-components";

export const DivGeral = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .calculadora {
    height: 556px;
    width: 356px;

    display: flex;
    flex-direction: column;

    padding: 32px;
    border-radius: 48px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
      0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
      0px 8px 17px rgba(0, 0, 0, 0.29),
      inset 0px 6px 8px rgba(255, 255, 255, 0.1),
      inset 0px -4px 5px rgba(0, 0, 0, 0.22);
    background-color: #2d2a37;
  }

  .visor {
    height: 75px;
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 0px 22px 0px 22px;

    margin-top: 20px;
  }

  .operacao-atual {
    width: 100%;

    display: flex;
    justify-content: flex-end;
  }

  .operacao-atual span {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;

    color: #6b6b6b;
  }

  .resultado-operacao {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .igual {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;

    color: #6b6b6b;
  }

  .resultado {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 126.5%;

    color: #ebebeb;
  }

  .teclas {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;

    margin-top: 26px;
    gap: 12px;
  }

  .teclas-column {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: repeat(5, 1fr);

    gap: 12px;
  }

  .button-tecla {
    all: unset;

    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.05) 0%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      #2d2a37;

    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01),
      0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.06);
    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }

  .button-tecla--purple {
    all: unset;

    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.05) 0.01%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      #462878;

    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01),
      0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.1);
    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }
  .button-tecla--light-purple {
    all: unset;

    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      #7f45e2;

    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01),
      0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),
      inset 0px 2px 3px rgba(255, 255, 255, 0.1);
    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }

  .--padrao {
    color: #fff;
  }
`;
