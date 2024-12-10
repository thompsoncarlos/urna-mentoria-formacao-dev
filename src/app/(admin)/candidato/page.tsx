import ListaCandidato from "@/src/components/candidato/ListaCandidato";
import candidatos from "@/src/data/constants/candidatos";
import Candidato from "@/src/data/model/Cadidato";
import { useState } from "react";

export default function PaginaCandidato() 
{
   const [candidatos, setCandidatos] = useState(candidatosIniciais);

   function excluirCandidato(candidato: Candidato) {
      const candidatorRestantes = candidatos.slice(1, 1);

   }

   return (
      <div>
         <button>Excluir</button>
         <ListaCandidato 
            candidatos ={candidatos}
             
         />
      </div>
   )
}