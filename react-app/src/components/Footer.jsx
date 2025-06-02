import React from 'react';

export default function Footer() {
  return (

    <footer className="team-info flex justify-center flex-col items-center bg-[linear-gradient(to_right,_#385894_0%,_#473CE0_48%,_#682FD8_85%)]">   {/*flex justify center flex-direction column #385894 #473CE0 #682FD8*/}
      <div className="footer-bold flex justify-around w-full">{/* flex justify-space around*/}
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

      <div className="copyright bg-green-500 text-center"> {/*bring up opacity*/}
        <p>@2025 Chingu. All rights reserved.</p>
      </div>
    </footer>
  );
}