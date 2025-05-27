//This is the header component

import React from "react";

export default function Footer() {
  return (
    <div>
        {/* */}
      <div className="team-info flex justify-center flex-col items-center">   {/*flex justify center flex-direction column #385894 #473CE0 #682FD8*/}
        <div className="footer-bold flex justify-between w-full">{/* flex justify-space apart*/}
          <h3>Team</h3>
          <h3>icon</h3>
          {/* Github Icon*/}
        </div>

        <div className="name-container flex w-4/5">  {/* flex flex-direction row width 80%?*/}
          <p className="w-3/10 text-left">Alison Holland</p>{/*width 30% align-text left */}
          <p className="w-3/10 text-left">Jim Schibler</p>
          <p className="w-3/10 text-left">Marissa Lamothe</p>
        </div>

        <div className="name-container flex w-4/5">
          <p className="w-3/10 text-left">Myoungjin Lee</p>
          <p className="w-3/10 text-left">Molly</p>
          <p className="w-3/10 text-left">Valerie</p>
        </div>

      </div>

      <div className="copyright">
        <p>@2025 Chingu. All rights reserved.</p>
      </div>


      {/*<header className="p-4 border-2">
        <h2 className="text-2xl font-bold">My Footer</h2>
         We can code our information here 
      </header>*/}
    </div>
  );
}
