//This is the header component

import React from 'react'

export default function Footer() {
  return (
    //this is the component below div
    <div className="p-4">
      <header className="border-2 whitespace-normal break-words">
        <h2 className="text-2xl font-bold text-center pt-4">Team Members</h2>
        <ul className="p-4">
          <li>
            Marissa Lamothe: 
            <a href="https://github.com/msrissaxox" target='_blank'>GitHub</a> / <a href="https://www.linkedin.com/in/marissalamothe/" target='_blank'>LinkedIn</a>
          </li>

          <li>
            Alison Holland: 
            <a href="https://github.com/alison-ah" target='_blank'>GitHub</a> / <a href="https://www.linkedin.com/in/andersonholland/" target='_blank'>LinkedIn</a>
          </li>
         
          <li>
            Valerie: 
            <a href='https://github.com/val-ue' target='_blank'>GitHub</a> / <a href='https://www.linkedin.com/in/valerielabideveloper/' target='_blank'>LinkedIn</a>
          </li>
            
          <li>
            Molly: 
            <a href='https://github.com/learningcoding2022' target='_blank'>GitHub</a> / <a href='https://www.linkedin.com/in/molly-b-97877492/' target='_blank'>LinkedIn</a>
          </li>

          <li>
            MJ: 
            <a href='https://github.com/lmj5081' target='_blank'>GitHub</a> / <a href='https://www.linkedin.com/in/mjleedesigners/' target='_blank'>LinkedIn</a>
          </li>

          <li>
            Jim Schibler: 
            <a href="https://github.com/jaschibler" target='_blank'>GitHub</a> / <a href="https://www.linkedin.com/in/jimschibler/" target='_blank'>LinkedIn</a>
          </li>
        </ul>
      </header>
    </div>
  )
}
