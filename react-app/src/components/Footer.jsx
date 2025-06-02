import React from 'react';

export default function Footer() {
  return (
     <div>
      <div className="team-info flex justify-center flex-col items-center bg-[linear-gradient(to_right,_#385894_0%,_#473CE0_48%,_#682FD8_85%)]">   {/*flex justify center flex-direction column #385894 #473CE0 #682FD8*/}
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

      </div>

      <div className="copyright bg-green-500 text-center"> {/*bring up opacity*/}
        <p>@2025 Chingu. All rights reserved.</p>
      </div>
  </div>
  );
}

    

/*export default function Footer() {
  return (
    <div>
       
      <div className="team-info flex justify-center flex-col items-center">   {/*flex justify center flex-direction column #385894 #473CE0 #682FD8*/
       /* <div className="footer-bold flex justify-between w-full"> flex justify-space apart*
          <h3>Team</h3>
          <h3>icon</h3>
          {/* Github Icon*
        </div>

        <div className="name-container flex w-4/5">  {/* flex flex-direction row width 80%?
          <p className="w-3/10 text-left">Alison Holland</p>{/*width 30% align-text left 
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

    </footer>



  //   <div className="p-4">
  //     <footer className="border-2 whitespace-normal break-words">
  //       <h2 className="text-2xl font-bold text-center pt-4">Team Members</h2>
  //       <ul className="p-4">
  //         <li>
  //           Marissa Lamothe: 
  //           <a href="https://github.com/msrissaxox" target='_blank'>GitHub</a> / <a href="https://www.linkedin.com/in/marissalamothe/" target='_blank'>LinkedIn</a>
  //         </li>

  //         <li>
  //           Alison Holland: 
  //           <a href="https://github.com/alison-ah" target='_blank'>GitHub</a> / <a href="https://www.linkedin.com/in/andersonholland/" target='_blank'>LinkedIn</a>
  //         </li>
         
  //         <li>
  //           Valerie: 
  //           <a href='https://github.com/val-ue' target='_blank'>GitHub</a> / <a href='https://www.linkedin.com/in/valerielabideveloper/' target='_blank'>LinkedIn</a>
  //         </li>
            
  //         <li>
  //           Molly: 
  //           <a href='https://github.com/learningcoding2022' target='_blank'>GitHub</a> / <a href='https://www.linkedin.com/in/molly-b-97877492/' target='_blank'>LinkedIn</a>
  //         </li>

  //         <li>
  //           MJ: 
  //           <a href='https://github.com/lmj5081' target='_blank'>GitHub</a> / <a href='https://www.linkedin.com/in/mjleedesigners/' target='_blank'>LinkedIn</a>
  //         </li>

  //         <li>
  //           Jim Schibler: 
  //           <a href="https://github.com/jaschibler" target='_blank'>GitHub</a> / <a href="https://www.linkedin.com/in/jimschibler/" target='_blank'>LinkedIn</a>
  //         </li>

  //         <li>
  //           James: 
  //           <a href="https://github.com/Nwumfor" target='_blank'>GitHub</a> / <a href="https://www.linkedin.com/in/james-nwumfor-56008144/" target='_blank'>LinkedIn</a>
  //         </li>
  //       </ul>
  //     </footer>
  //   </div>*/
