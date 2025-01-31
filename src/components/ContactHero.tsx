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
        className=" about overflow-hidden "
        style={{ backgroundImage: "url(contacthero.png)" }}
      >
        <div className=" px-4 py-10 md:pb-72  md:pt-40 md:pl-52 ">
          <h1 className="  flex justify-start xl:text-[35px] lg:text-[30px] md:[25px] sm:text-[20px] font-semibold leading-[2.4rem] text-white">
            <br />
            <span className=" mb-4 md:mb-8 font-bold text-2xl leading-6 text-[#252B42]">
              {" "}
              CONTACT US{" "}
            </span>{" "}
          </h1>

          <h1 className=" flex justify-start text-[35px] mt-5 xl:text-[40px] lg:text-[30px] sm:text-[25px] font-semibold leading-[2.4rem] text-[#252B42]">
            Get in touch today!
          </h1>

          <p className=" flex justify-start font-bold mt-10  sm:flex  items-start leading-8 text-[20px] md:text-[18px]  text-[#737373] ">
            We know how large objects will act&rsquo;{" "}
          </p>
          <p className="flex justify-start  font-bold sm:flex  mb-10 items-start leading-8 text-[20px] md:text-[16px]  text-[#737373] ">
            but things on a small scale
          </p>

          <p className=" flex justify-start font-bold mt-10  sm:flex  items-start leading-8 text-[20px] md:text-[18px]  text-[#252B42] ">
            Phone ; +451 215 215{" "}
          </p>

          <p className=" flex justify-start  mt-10  sm:flex  font-bold items-start leading-8 text-[20px] md:text-[18px]  text-[#252B42] ">
            Fax : +451 215 215{" "}
          </p>

          <div className="w-[242px] h-[50px]">
            <div className="flex flex-col pr-36 items-center  py-6">
              <ul className="flex   gap-4">
                <li>
                  <Image
                    src={Facebook}
                    alt="facebook"
                    className=" cursor-pointer"
                  />
                </li>
                <li>
                  <Image
                    src={Iinstagram}
                    alt="instagram"
                    className=" cursor-pointer"
                  />
                </li>
                <li>
                  <Image
                    src={Twitter}
                    alt="twitter"
                    className=" cursor-pointer"
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
