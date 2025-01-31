import React from "react";
import Image from "next/image";
import Media1 from "../../public/Aboutimages/Media1.png";
import Media2 from "../../public/Aboutimages/Media2.png";
import Media3 from "../../public/Aboutimages/Media3.jpg";
import Facebook from "../../public/Aboutimages/Facebook.png";
import Iinstagram from "../../public/Aboutimages/Iinstagram.png";
import Twitter from "../../public/Aboutimages/Twitter.png";

const AboutTeam = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Title */}
        <div className="flex justify-center">
          <h1 className="font-semibold text-4xl sm:text-5xl text-center text-[#252B42]">
            Meet Our Team
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-[#737373] text-center pt-5 text-sm sm:text-base">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>

        {/* Team Members */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center  p-5">
            <Image src={Media1} alt="media" />
            <h1 className="text-center font-bold pt-4 text-[#252B42]">
              Username
            </h1>
            <h4 className="text-center text-[#737373] font-bold pb-4">
              Profession
            </h4>
            <ul className="flex justify-center gap-4">
              <li>
                <Image src={Facebook} alt="facebook" />
              </li>
              <li>
                <Image src={Iinstagram} alt="instagram" />
              </li>
              <li>
                <Image src={Twitter} alt="twitter" />
              </li>
            </ul>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center p-5">
            <Image src={Media2} alt="media" />
            <h1 className="text-center font-bold pt-4 text-[#252B42]">
              Username
            </h1>
            <h4 className="text-center text-[#737373] font-bold pb-4">
              Profession
            </h4>
            <ul className="flex justify-center gap-4">
              <li>
                <Image src={Facebook} alt="facebook" />
              </li>
              <li>
                <Image src={Iinstagram} alt="instagram" />
              </li>
              <li>
                <Image src={Twitter} alt="twitter" />
              </li>
            </ul>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center  p-5">
            <Image src={Media3} alt="media" />
            <h1 className="text-center font-bold pt-4 text-[#252B42]">
              Username
            </h1>
            <h4 className="text-center text-[#737373] font-bold pb-4">
              Profession
            </h4>
            <ul className="flex justify-center gap-4">
              <li>
                <Image src={Facebook} alt="facebook" />
              </li>
              <li>
                <Image src={Iinstagram} alt="instagram" />
              </li>
              <li>
                <Image src={Twitter} alt="twitter" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
