import React from 'react'

export default function Header() {
  function getCurrentDate() {
    const date = new Date()
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = date.getMonth() // Months are zero-based
    const day = date.getDate()
    const year = date.getFullYear()
    return `${months[month]} ${day}, ${year}`
  }

  return (
    <div>
      <header className="flex flex-col p-4 bg-gradient-to-r from-[#385894] via-[#473CE0] to-[#682FD8] rounded-lg p-[24px]">
        <div className="flex justify-between w-full text-white">
          <div className="flex w-1/2">
            <img
              src="peerpicks-logo-white.png"
              alt="PeerPicks icon"
              className="h-auto object-contain"
            />
            {/*<h1 className="text-2xl font-bold md:text-3xl">Peer Picks</h1>-->*/}
          </div>
          <h2 className="flex justify-end text-gray-500 text-shadow-md text-xs font-normal md:text-lg text-white w-1/2 font-helvetica">
            {getCurrentDate()}
          </h2>
        </div>
        <div className="flex flex-col self-start headerText text-white font-bold text-xl pt-[1.5em]">
          <h3 className="text-left">Find your next</h3>
          <h3 className="text-left">PeerPick</h3>
          <h3 className="text-left">try tags + Keywords</h3>
        </div>
      </header>
    </div>
  )
}
