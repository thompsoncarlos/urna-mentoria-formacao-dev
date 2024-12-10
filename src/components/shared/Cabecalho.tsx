import Link from "next/link";

/* eslint-disable react/jsx-key */
export default function Cabecalho() {
  return [
    <header className="flex justify-between items-center h-24 bg-zinc-900">
        <div>
            <h1></h1>
            <nav>
                <Link href="/">Início</Link>
                <Link href="/">Candidatos</Link>
                <Link href="/">Eleitor</Link>
            </nav>
        </div>
    </header>,
  ];
}
