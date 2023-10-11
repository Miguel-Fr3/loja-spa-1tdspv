import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
  <>
    <h1>HOME</h1>
    <Image src="/home.png" alt="Loja" width={320} height={320}/>
    
    <div>
      <ul>
        
        <li><Link href="/produtos/calca">CALÇA</Link></li>
        <li><Link href="/produtos/camiseta">CAMISETA</Link></li>
        <li><Link href="/produtos/tenis">TÊNIS</Link></li>
      </ul>
    </div>
  </>
  )
}
