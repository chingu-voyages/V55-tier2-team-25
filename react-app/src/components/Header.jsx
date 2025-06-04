import React from 'react'

export default function Header() {
  function getCurrentDate() {
    const date = new Date()
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
  }

  return (
    <div>
      <header className="flex flex-col bg-gradient-to-r from-[#385894] via-[#473CE0] to-[#682FD8] rounded-b-4xl p-10 pb-28 md:p-20 md:pb-30 lg:p-25 lg:pb-30">
        {/*pb-28*/}
        <div className="flex justify-between w-full text-white">
          <div className="flex w-1/2">
            <h1>
              <img
                src="peerpicks-logo-white.png"
                alt="PeerPicks"
                className="max-h-10 min-h-4 h-auto object-contain"
              />
            </h1>
            {/*<h1 className="text-2xl font-bold md:text-3xl">Peer Picks</h1>-->*/}
          </div>
          <h2 className="flex justify-end text-gray-500 text-shadow-md text-xs font-normal md:text-lg text-white w-1/2 font-helvetica">
            {getCurrentDate()}
          </h2>
        </div>
        <div className="flex flex-col self-start headerText text-white font-bold text-xl md:text-2xl lg:text-3xl pt-[1.5em] text-left font-pretendard md:pt-12 md:pb-8 lg:pt-16 lg:pb-12">
          <h3>
            Find Your Next Pick.
            <br />
            Using Tags + Keywords.
            <br />
            Explore Now.
          </h3>
        </div>
      </header>
    </div>
  )
}
