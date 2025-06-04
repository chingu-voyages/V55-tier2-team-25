import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="text-white flex flex-col justify-center items-center bg-[linear-gradient(to_right,_#385894_0%,_#473CE0_48%,_#682FD8_85%)]">
      <div className="team-info w-[70%] p-8 flex justify-center flex-col items-center">
        <div className="footer-bold flex justify-between w-full pb-4">
          <p className="font-bold text-2xl">Team</p>
          <p className="text-3xl pr-5">
            <a
              href="https://github.com/chingu-voyages/V55-tier2-team-25"
              target="_blank"
            >
              <FaGithub />
            </a>
          </p>
        </div>

        <div className="name-container flex w-full pb-4 justify-between">
          <p className="w-3/10 text-left">
            <a href="https://github.com/alison-ah" target="_blank">
              Alison Holland
            </a>
          </p>
          <p className="w-3/10 text-left">
            <a href="https://github.com/Nwumfor" target="_blank">
              Jim Schibler
            </a>
          </p>
          <p className="w-3/10 text-left">
            <a href="https://github.com/msrissaxox" target="_blank">
              Marissa Lamothe
            </a>
          </p>
        </div>

        <div className="name-container flex w-full justify-between">
          <p className="w-3/10 text-left">
            <a href="https://github.com/lmj5081" target="_blank">
              Myoungjin Lee
            </a>
          </p>
          <p className="w-3/10 text-left">
            <a href="https://github.com/learningcoding2022" target="_blank">
              Molly
            </a>
          </p>
          <p className="w-3/10 text-left">
            <a href="https://github.com/val-ue" target="_blank">
              Valerie
            </a>
          </p>
        </div>
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
