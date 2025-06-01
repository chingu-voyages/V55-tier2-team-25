import React from 'react'

export default function Header() {
  function getCurrentDate() {
    const date = new Date()
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
  }

  return (
    <div>
      <header className="flex flex-col bg-gradient-to-r from-[#385894] via-[#473CE0] to-[#682FD8] rounded-b-4xl p-10 pb-28">
        <div className="flex justify-between w-full text-white">
          <div className="flex w-1/2">
            <h1>
              <img
                src="peerpicks-logo-white.png"
                alt="PeerPicks"
                className="h-auto object-contain"
              />
            </h1>
            {/*<h1 className="text-2xl font-bold md:text-3xl">Peer Picks</h1>-->*/}
          </div>
          <h2 className="flex justify-end text-gray-500 text-shadow-md text-xs font-normal md:text-lg text-white w-1/2 font-helvetica">
            {getCurrentDate()}
          </h2>
        </div>
        <div className="flex flex-col self-start headerText text-red-500 font-bold text-xl pt-[1.5em] text-left font-pretendard">
          <h3>
            Find your next <br />
            PeerPick <br />
            try tags + Keywords
          </h3>
        </div>
      </header>
    </div>
  )
}
