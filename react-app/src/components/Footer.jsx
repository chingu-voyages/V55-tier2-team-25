import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
    <footer className='block md:hidden text-white flex flex-col justify-center items-center bg-[linear-gradient(to_right,_#385894_0%,_#473CE0_48%,_#682FD8_85%)]'>
    {/*Mobile Version*/}
      <div className="block md:hidden team-info w-[70%] p-8 flex justify-center flex-col items-center">
        <div className="block md:hidden footer-bold flex justify-between w-full pb-4">
          <p className='block md:hidden font-bold text-2xl'>Team</p>
          <p className='block md:hidden text-3xl pr-5'><a href="https://github.com/chingu-voyages/V55-tier2-team-25" target='_blank'><FaGithub /></a></p>
        </div>

        {/*<div className="credits flex w-full pb-4 justify-between ">*/}
          <div className="block md:hidden name-container flex w-full pb-4 justify-between">  
            {/*md:flex-col*/}
            <p className="block md:hidden w-3/10 text-left"><a href="https://www.linkedin.com/in/andersonholland/" target='_blank'>Alison H.</a></p>
            <p className="block md:hidden w-3/10 text-left"><a href="https://www.linkedin.com/in/marissalamothe/" target='_blank'>Marissa L.</a></p>
            <p className="block md:hidden w-1/4 text-left"><a href="https://github.com/lmj5081" target='_blank'>Myoungjin L.</a></p>
          </div>

          <div className="block md:hidden name-container flex w-full justify-between md:flex-col">
            <p className="block md:hidden w-3/10 text-left"><a href="https://www.linkedin.com/in/jimschibler/" target='_blank'>Jim S.</a></p>
            <p className="block md:hidden w-1/4 text-left"><a href="https://github.com/learningcoding2022" target='_blank'>Molly B.</a></p>
            <p className="block md:hidden w-1/4 text-left"><a href="https://github.com/val-ue" target='_blank'>Valerie L.</a></p>
            <p className="block md:hidden w-1/4 text-left"><a href="https://github.com/Nwumfor" target='_blank'>James N.</a></p>
          </div>
        {/*</div>*/}
      </div>

      <div className="block md:hidden copyright text-center bg-white/10 w-full p-[10px]"> 
        <p>@<span id="spanYear">{new Date().getFullYear()}</span> Chingu. All rights reserved.</p>
      </div>

    </footer>


  <footer className='hidden md:block text-white flex flex-col justify-center items-center bg-[linear-gradient(to_right,_#385894_0%,_#473CE0_48%,_#682FD8_85%)]'>
    {/*Desktop Version do i need the blocks on all? check later*/}
    <div className="upper-footer flex ">
      <div className="logo-container w-1/2">
        <img
          src="peerpicks-logo-white.png"
          alt="PeerPicks"
          className="official-logo"
        />
        <div className="github-repo-link">
          <p className="on-github">GitHub</p>
          <a href="https://github.com/chingu-voyages/V55-tier2-team-25" target='_blank'><FaGithub /></a>
        </div>
      </div>

      <div className="desktop-name-container w-1/2">
        <div className="credit">
          <p className="title">Product Owner</p>
          <p className="name">Jim S.</p>
          <a href="https://www.linkedin.com/in/jimschibler/" target='_blank'>link</a>
        </div>

        <div className="credit">
          <p className="title">Scrum Master</p>
          <p className="name">James N.</p>
          <a href="https://github.com/Nwumfor" target='_blank'>link</a>
        </div>

        <div className="credit">
          <p className="title">Web Developers</p>
          <p className="name">Alison H.</p>
          <a href="https://www.linkedin.com/in/andersonholland/" target='_blank'>link</a>
        </div>

        <div className="credit">
          <p className="title"></p>
          <p className="name">Marissa L.</p>
          <a href="https://www.linkedin.com/in/marissalamothe/" target='_blank'>link</a>
        </div>

        <div className="credit">
          <p className="title"></p>
          <p className="name">Molly B.</p>
          <a href="https://github.com/learningcoding2022" target='_blank'>link</a>
        </div>

        <div className="credit">
          <p className="title"></p>
          <p className="name">Valerie L.</p>
          <a href="https://github.com/val-ue" target='_blank'>link</a>
        </div>

        <div className="credit">
          <p className="title">UX/UI Designer</p>
          <p className="name">Myoungjin L.</p>
          <a href="https://github.com/lmj5081" target='_blank'>link</a>
        </div>

      </div>
    </div>

    <div className="copyright text-center bg-white/10 w-full p-[10px]"> 
      <p>@<span id="spanYear">{new Date().getFullYear()}</span> Chingu. All rights reserved.</p>
    </div>

  </footer>
  </>
  );





}


