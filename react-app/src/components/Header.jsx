import React from 'react'
import { selectIsMobile } from '@/redux/dataSlice'
import { useSelector } from 'react-redux'

export default function Header() {
  const isMobile = useSelector(selectIsMobile)

  function getCurrentDate() {
    const date = new Date()
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
  }

  return (
    <div>
      <header className="flex flex-col lg:items-center bg-gradient-to-br from-[#385894] via-[#473CE0] to-[#682FD8] rounded-b-4xl p-10 pb-28 md:p-20 md:pb-30 lg:pt-16 lg:pb-30">
        {/*pb-28*/}
        <div className="flex justify-between w-full text-white lg:max-w-[1200px]">
          <div className="flex w-1/2">
            <h1>
              <img
                src="peerpicks-logo-white.png"
                alt="PeerPicks"
                className="max-h-10 lg:max-h-5 min-h-4 h-auto object-contain"
              />
            </h1>
            {/*<h1 className="text-2xl font-bold md:text-3xl">Peer Picks</h1>-->*/}
          </div>
          <h2 className="flex justify-end text-shadow-md text-xs font-normal md:text-lg text-white w-1/2 font-helvetica">
            {getCurrentDate()}
          </h2>
        </div>
        <div className="flex flex-col self-start lg:self-center headerText text-white font-bold text-xl md:text-2xl lg:text-center lg:text-5xl lg:pt-6 lg:pb-6 pt-[1.5em] text-left font-pretendard md:pt-12 md:pb-8">
          <h3>
            Find Your Next Pick.
            <br />
            Use Tags + Keywords.
            <br />
            Explore Now!
          </h3>
        </div>
      </header>
    </div>
  )
}
