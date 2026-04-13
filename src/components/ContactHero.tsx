import React from "react";
import Image from "next/image";
import Facebook from "../../public/Aboutimages/Facebook.png";
import Iinstagram from "../../public/Aboutimages/Iinstagram.png";
import Twitter from "../../public/Aboutimages/Twitter.png";
import AboutNavber from "@/components/AboutNavber";
const ContactHero = () => {
  return (
    <div>
      <AboutNavber />
      <section
        className="about overflow-hidden"
        style={{ backgroundImage: "url(contacthero.png)" }}
      >
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14 md:py-20 lg:py-24">
          <h1 className="flex justify-start font-semibold text-white">
            <span className="mb-4 sm:mb-6 md:mb-8 font-bold text-lg sm:text-xl md:text-2xl text-[#252B42]">
              CONTACT US
            </span>
          </h1>

          <h1 className="flex justify-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 md:mt-5 font-semibold text-[#252B42]">
            Get in touch today!
          </h1>

          <p className="flex justify-start font-bold mt-6 sm:mt-8 md:mt-10 leading-7 sm:leading-8 text-base sm:text-lg text-[#737373]">
            We know how large objects will act
          </p>
          <p className="flex justify-start font-bold mb-6 sm:mb-8 md:mb-10 leading-7 sm:leading-8 text-base sm:text-lg text-[#737373]">
            but things on a small scale
          </p>

          <p className="flex justify-start font-bold mt-6 leading-7 sm:leading-8 text-base sm:text-lg text-[#252B42]">
            Phone: +451 215 215
          </p>

          <p className="flex justify-start font-bold mt-3 leading-7 sm:leading-8 text-base sm:text-lg text-[#252B42]">
            Fax: +451 215 215
          </p>

          <div className="mt-6 sm:mt-8">
            <div className="flex items-center py-4 sm:py-6">
              <ul className="flex gap-3 sm:gap-4">
                <li>
                  <Image
                    src={Facebook}
                    alt="facebook"
                    className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
                    width={32}
                    height={32}
                  />
                </li>
                <li>
                  <Image
                    src={Iinstagram}
                    alt="instagram"
                    className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
                    width={32}
                    height={32}
                  />
                </li>
                <li>
                  <Image
                    src={Twitter}
                    alt="twitter"
                    className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
                    width={32}
                    height={32}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHero;
