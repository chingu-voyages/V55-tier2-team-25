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
      <header className="flex items-center justify-between flex-col p-4 bg-gradient-to-br from-blue-500 to-violet-500 p-4 rounded-lg">
        <div className="flex flex-nowrap w-full justify-between text-white">
          <div className="flex flex-nowrap">
            <img src="icon.png" alt="PeerPicks icon" className="w-12 h-12" />
            <h1 className="text-2xl font-bold md:text-3xl">Peer Picks</h1>
          </div>
          <h2 className="text-gray-500 text-shadow-md text-s font-normal md:text-lg text-white">
            {getCurrentDate()}
          </h2>
        </div>
        <div className="headerText text-white">
          <h3>Find your next</h3>
          <h3>PeerPick</h3>
          <h3>try tags + Keywords</h3>
        </div>
      </header>
    </div>
  )
}
