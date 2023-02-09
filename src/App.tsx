import { Calculadora } from "./page/PaginaPrincipal";
import { Container } from "./page/PaginaPrincipal/styles";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GlobalStyle />
      <Calculadora />
    </div>
  );
}
