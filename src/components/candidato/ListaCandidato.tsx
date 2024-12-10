import candidatos from "@/src/data/constants/candidatos";
import Candidato from "@/src/data/model/Cadidato";

export interface ListaCandaditosProps {
  candidatos: Candidato[];
}

export default function ListaCandidatos(props: ListaCandaditosProps) {

    function excluirCandidato() {
        alert("");
    }
  
    function renderizarItens() {
    const componentes = [];

    for (let i = 0; i < props.candidatos.length; i++) {
      const candidato = props.candidatos[i];
      componentes.push(
        <div key={candidato.id}>
          <h2>
            {candidato.nome} ({candidato.partido})
          </h2>
          <p>{candidato.descricao}</p>
          <div>
            <button 
                className="botao-vermelho" 
                onClick={() => props.excluirCandidato(candidato)}>Excluir</button>
          </div>
        </div>
      );
    }
    return componentes;
  }
  return <div className=""
  { renderizarItens }></div>;
}
