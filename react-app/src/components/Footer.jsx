//This is the header component

import React from 'react'

export default function Footer() {
  return (
    //this is the component below div
    <div className="flex justify-center">
      <header className="p-4 border-2">
        <h2 className="text-2xl font-bold text-center">Team Members</h2>
        <ul className="pt-4 pb-4">
          <li>
            Marissa Lamothe: [GitHub](https://github.com/msrissaxox) /
            [LinkedIn](https://linkedin.com/in/marissalamothe/)
          </li>
          <li>
            Alison Holland: [GitHub](https://github.com/alison-ah) /
            [LinkedIn](https://linkedin.com/in/andersonholland/)
          </li>
          <li>
            Valerie: [GitHub](https://github.com/val-ue) /
            [LinkedIn](https://www.linkedin.com/in/valerielabideveloper/)
          </li>
          <li>
            Molly: [GitHub](https://github.com/learningcoding2022) /
            [LinkedIn](https://www.linkedin.com/in/molly-b-97877492/)
          </li>
          <li>
            MJ: [GitHub](https://github.com/lmj5081) /
            [LinkedIn](https://www.linkedin.com/in/mjleedesigners)
          </li>
          <li>
            Jim Schibler: [GitHub](https://github.com/jaschibler) /
            [LinkedIn](https://linkedin.com/in/jimschibler)
          </li>
        </ul>
      </header>
    </div>
  )
}
