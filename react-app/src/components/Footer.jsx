import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { selectIsMobile } from '@/redux/dataSlice'
import { useSelector } from 'react-redux'

export default function Footer() {
  const isMobile = useSelector(selectIsMobile)

  return (
    <footer className="text-white flex flex-col justify-center items-center bg-gradient-to-br from-[#385894] via-[#473CE0] to-[#682FD8]">
      <div className="w-[98%] md:w-[90%] p-8 flex justify-center flex-col items-center md:max-w-[450px] lg:max-w-[800px] mx-auto">
        <div className="footer-bold flex justify-between w-full pb-4">
          <h2 className="font-bold text-2xl">Team</h2>
          <p className="text-3xl md:pr-10 lg:pr-10">
            <a
              href="https://github.com/chingu-voyages/V55-tier2-team-25"
              target="_blank"
              title="GitHub Repo for PeerPicks"
            >
              <FaGithub />
            </a>
          </p>
        </div>

        {/*<div className="credits flex w-full pb-4 justify-between ">*/}
        <div className="w-full flex flex-wrap justify-center pb-4">
          <p className="w-1/3 lg:w-[14.2857%]">
            <a
              href="https://www.linkedin.com/in/andersonholland/"
              target="_blank"
            >
              Alison H.
            </a>
          </p>
          <p className="w-1/3 lg:w-[14.2857%]">
            <a
              href="https://www.linkedin.com/in/marissalamothe/"
              target="_blank"
            >
              Marissa L.
            </a>
          </p>
          <p className="w-1/3 lg:w-[14.2857%]">
            <a href="https://github.com/lmj5081" target="_blank">
              Myoungjin L.
            </a>
          </p>
          <p className="w-1/3 lg:w-[14.2857%]">
            <a href="https://www.linkedin.com/in/jimschibler/" target="_blank">
              Jim S.
            </a>
          </p>
          <p className="w-1/3 lg:w-[14.2857%]">
            <a href="https://github.com/learningcoding2022" target="_blank">
              Molly
            </a>
          </p>
          <p className="w-1/3 lg:w-[14.2857%]">
            <a href="https://github.com/val-ue" target="_blank">
              Valerie L.
            </a>
          </p>
          <p className="w-1/3 lg:w-[14.2857%]">
            <a href="https://github.com/Nwumfor" target="_blank">
              James
            </a>
          </p>
        </div>
        {/*</div>*/}
      </div>

      <div className="copyright text-center bg-white/10 w-full p-[10px]">
        <p>
          @<span id="spanYear">{new Date().getFullYear()}</span> Chingu. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}
