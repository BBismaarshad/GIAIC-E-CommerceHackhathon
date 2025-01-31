import React from "react";
import Image from "next/image";
import Videocard from "../../public/Aboutimages/Videocard.png";

const AboutVideo = () => {
  return (
    <div className="my-16  pt-20 sm:pt-36 md:pt-52 flex justify-center px-4 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="w-full max-w-[1050px]">
          <div className="w-full">
            <Image
              src={Videocard}
              alt="Video"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div> 
  );
};

export default AboutVideo;
