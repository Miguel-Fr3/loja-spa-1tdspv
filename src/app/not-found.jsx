import React from 'react'
import Image from "next/image";
export default function NotFound() {
  return (
    <div>
        <h1>404</h1>
        <p>Not Found!</p>
        <div>
            
            <Image
            src="https://httpstatusdogs.com/img/404.jpg"
            alt="404 Erro dog"
            width={650}
            height={500}/>
        </div>
    </div>
  )
}
