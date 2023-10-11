import Link from "next/link";
import Image from "next/image";
export default function Camiseta() {
  return (
    <div>
        <h1>CAMISETA</h1>
        
        <div>
            <p>Minha camiseta é muito boa e bonita</p>
            <p><Link href="/">Voltar...</Link></p>
            <figure>
            <Image src="/camiseta.png" alt="Camiseta" width={320} height={320}/>
            </figure>
        </div>
    </div>
  )
}
