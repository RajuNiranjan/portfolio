import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 gap-5 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 relative rounded-full border border-[#777] hover:border-white ">
            <CodeBracketIcon className="h-10 w-10 text-[#777] m-2 cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 relative rounded-full border border-[#777] hover:border-white ">
            <EyeIcon className="h-10 w-10 text-[#777] m-2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-8 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#888]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
