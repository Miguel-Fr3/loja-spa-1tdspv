import React from 'react'
import Link from "next/link";
export default function cabecalho() {
  return (
    <header>
        <ul>
            
          <li><Link href="/produtos/calca">CALÇA</Link></li>
          <li><Link href="/produtos/camiseta">CAMISETA</Link></li>
          <li><Link href="/produtos/tenis">TÊNIS</Link></li>
      
        </ul>
  </header>
  )
}
