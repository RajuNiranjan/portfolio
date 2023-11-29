import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between">
      <video
        width={30}
        height={30}
        src="/video/3d-react.mp4"
        type="video/mp4"
        loop
        muted
        autoPlay="autoplay"
      />
      <h3 className="text-[#777] text-[10px]">
        Copyright © 2023 Raju.All Rights Reserved.
      </h3>
    </footer>
  );
};

export default Footer;
