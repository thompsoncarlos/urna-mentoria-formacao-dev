/* eslint-disable @typescript-eslint/no-unused-vars */
import Candidato from "@/src/data/model/Cadidato";
import { useState } from "react";

export interface FormularioCandidatoProps {
    candidato: Partial<Candidato>;
    
}

export default function FormularioCandidato(props: FormularioCandidatoProps) {

    const [candidato, setCandidato] = useState<Partial<Candidato>>(
        props.candidato
    )

    return (
        <div>
            <div className="">
                <span>Numero</span>
                <input 
                    type="text" 
                    value={candidato.nome} 
                    onChange={(e) => setCandidato({ ...candidato, nome: e.target.value })}
                />
            </div>
            <div className="">
                <span>Numero</span>
                <input 
                    type="text" 
                    value={candidato.numero}
                    onChange={(e) => setCandidato({ ...candidato, numero: +e.target.value })}
                    />
            </div>
            <div className="">
                <span>Partido</span>
                <input 
                    type="text" 
                    value={candidato.partido}
                    onChange={(e) => setCandidato({ ...candidato, partido: e.target.value })}
                />
            </div>
            <div className="">
                <span>Descrição</span>
                <input 
                    type="text" 
                    value={candidato.descricao}
                    onChange={(e) => setCandidato({ ...candidato, descricao: e.target.value })}
                />
            </div>
            <div>
                <button>Cancelar</button>
                <button>Salvar</button>
            </div>
        </div>
    )
}