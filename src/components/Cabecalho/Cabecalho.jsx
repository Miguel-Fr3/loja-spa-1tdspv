"use client";

import Link from "next/link";
import { useState } from "react";

export default function cabecalho() {



  // const token = sessionStorage.getItem("token-users");
 
  return (

    <header className="bg-slate-800 text-white">



      <h1 className="text-center text-3x1 font-extrabold">PRODUTOS</h1>
      <hr className="border-red-700"/>
      <nav className="menu">
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/login">LOGIN</Link>
        </li>
        <li>
          <Link href="/produtos/calca">CALÇA</Link>
        </li>
        <li>
          <Link href="/produtos/camiseta">CAMISETA</Link>
        </li>
        <li>
          <Link href="/produtos/tenis">TÊNIS</Link>
        </li>
        <li>
          <Link href="/produtos/fazenda/loja/laticinios">Queijos</Link>
        </li>
        <li>
          <Link href="/user-pages">GIT-USERS</Link>
        </li>
      </ul>
      </nav>
    </header>
  );
}