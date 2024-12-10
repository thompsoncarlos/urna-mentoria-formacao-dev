/* eslint-disable @typescript-eslint/no-explicit-any */
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
  return (
    <div className="flex flex-col h-screen">
      <Cabecalho />
      <main className="flex-1 py-16 container">
        {props.children}
      </main>
      <Rodape />
    </div>
  );
}
