
import Link from "next/link";
import Image from "next/image";

export default function Calca() {



  return (
    <div>
        <h1>CALÇA</h1>
        
        <div>
            <p>Minha calça é muito boa e bonita</p>
            <p><Link href="/">Voltar...</Link></p>
            <figure>
            <Image src="/calca.png" alt="calça" width={320} height={320}/>
            </figure>
        </div>
    </div>
  )
}
