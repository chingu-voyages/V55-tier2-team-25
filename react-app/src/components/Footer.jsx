import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { selectIsMobile } from "@/redux/dataSlice";
import { useSelector } from "react-redux";

export default function Footer() {
  const isMobile = useSelector(selectIsMobile);
  return (
    <footer className="min-w-[375px] text-white flex flex-col justify-center items-center bg-gradient-to-br from-[#385894] via-[#473CE0] to-[#682FD8]">
      {/*Mobile Version*/}
      {isMobile ? (
        <div className="w-[100%] max-w-md md:w-[85%] p-8 flex justify-center flex-col items-center md:max-w-[450px] lg:max-w-[800px] mx-auto">
          <div className="w-300px footer-bold flex justify-between w-full pb-4">
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
              <a href="https://github.com/learningcoding2022" target="_blank">
                Molly B.
              </a>
            </p>
            <p className="w-1/3 lg:w-[14.2857%]">
              <a href="https://github.com/val-ue" target="_blank">
                Valerie L.
              </a>
            </p>
            <p className="w-1/3 lg:w-[14.2857%]">
              <a href="https://github.com/lmj5081" target="_blank">
                Myoungjin L.
              </a>
            </p>
            <p className="w-1/3 lg:w-[14.2857%]">
              <a
                href="https://www.linkedin.com/in/jimschibler/"
                target="_blank"
              >
                Jim S.
              </a>
            </p>
            <p className="w-1/3 lg:w-[14.2857%]">
              <a href="https://github.com/Nwumfor" target="_blank">
                James N.
              </a>
            </p>
          </div>
        </div>
      ) : (
        /* Desktop version */
        <>
          <div className="upper-footer text-sm flex">
            <div className="logo-container w-1/2 flex items-center flex-col justify-center">
              <img
                src="peerpicks-logo-white.png"
                alt="PeerPicks"
                className="official-logo w-[55%]"
              />
              <div className="github-repo-link w-[55%] pt-[5px]">
                <p className="on-github flex items-center justify-end gap-[2%]">
                  See on GitHub
                  <a
                    className="text-[21px]"
                    href="https://github.com/chingu-voyages/V55-tier2-team-25"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </p>
              </div>
            </div>

            <div className="desktop-name-container w-1/2">
              <div className="credit-list-container p-6">
                <div className="credit flex pb-[7px]">
                  <p className="title flex items-center w-[120px] text-white/70">
                    Product Owner
                  </p>
                  <p className="name p-[4px] border-b-[1px] border-white/50 w-[51%]">
                    Jim S.
                  </p>
                  <a
                    className="text-[21px] border-b-[1px] border-white/50 flex items-center justify-center"
                    href="https://www.linkedin.com/in/jimschibler/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>

                <div className="credit flex pb-[7px]">
                  <p className="title flex items-center w-[120px] text-white/70">
                    Scrum Master
                  </p>
                  <p className="name p-[4px] border-b-[1px] border-white/50 w-[51%]">
                    James N.
                  </p>
                  <a
                    className="text-[21px] border-b-[1px] border-white/50 flex items-center justify-center"
                    href="https://linkedin.com/in/james-nwumfor-56008144"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>

                <div className="credit flex pb-[7px]">
                  <p className="title flex items-center w-[120px] text-white/70">
                    Web Developers
                  </p>
                  <p className="name p-[4px] border-b-[1px] border-white/50 w-[51%]">
                    Alison H.
                  </p>
                  <a
                    className="text-[21px] border-b-[1px] border-white/50 flex items-center justify-center"
                    href="https://www.linkedin.com/in/andersonholland/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>

                <div className="credit flex pb-[7px]">
                  <p className="title flex items-center w-[120px] text-white/70"></p>
                  <p className="name p-[4px] border-b-[1px] border-white/50 w-[51%]">
                    Marissa L.
                  </p>
                  <a
                    className="text-[21px] border-b-[1px] border-white/50 flex items-center justify-center"
                    href="https://www.linkedin.com/in/marissalamothe/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>

                <div className="credit flex pb-[7px]">
                  <p className="title flex items-center w-[120px] text-white/70"></p>
                  <p className="name p-[4px] border-b-[1px] border-white/50 w-[51%]">
                    Molly B.
                  </p>
                  <a
                    className="text-[21px] border-b-[1px] border-white/50 flex items-center justify-center"
                    href="https://github.com/learningcoding2022"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </div>

                <div className="credit flex pb-[7px]">
                  <p className="title flex items-center w-[120px] text-white/70"></p>
                  <p className="name p-[4px] border-b-[1px] border-white/50 w-[51%]">
                    Valerie L.
                  </p>
                  <a
                    className="text-[21px] border-b-[1px] border-white/50 flex items-center justify-center"
                    href="https://github.com/val-ue"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </div>

                <div className="credit flex pb-[7px]">
                  <p className="title flex items-center w-[120px] text-white/70">
                    UX/UI Designer
                  </p>
                  <p className="name p-[4px] border-b-[1px] border-white/50 w-[51%]">
                    Myoungjin L.
                  </p>
                  <a
                    className="text-[21px] border-b-[1px] border-white/50 flex items-center justify-center"
                    href="https://www.linkedin.com/in/mjleedesigners"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="copyright text-center bg-white/10 w-full p-[10px] text-xs">
        <p>
          @<span id="spanYear">{new Date().getFullYear()}</span> Chingu. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
