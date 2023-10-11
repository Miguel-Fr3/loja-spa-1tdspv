import Link from "next/link";
import Image from "next/image";
export default function Tenis() {
  return (
    <div>
        <h1>TÊNIS</h1>

        <div>
            <p>Meu tenis é muito bom e bonito</p>
            <p><Link href="/">Voltar...</Link></p>
            <figure>
              <Image src="/tenis.jpg" alt="Tênis" width={320} height={320}/>
            </figure>
        </div>
    </div>
  )
}
