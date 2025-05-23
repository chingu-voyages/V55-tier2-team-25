import React from 'react'
import icon from '../app/icon.png'

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
      <header className="flex items-center justify-between p-4">
        <img src={icon} alt="PeerPicks icon" />
        <h1 className="text-2xl font-bold md:text-3xl">Peer Picks</h1>
        <h2 className="text-gray-500 text-shadow-md text-s font-normal md:text-lg">
          {getCurrentDate()}
        </h2>
        <h3>Discover what your peers picked on PeerPicks</h3>
      </header>
    </div>
  )
}
