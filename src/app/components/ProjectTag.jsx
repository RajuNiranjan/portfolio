import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected ? "text-white bg-purple-500" : "";

  return (
    <button
      className={`rounded-full border-2 border-white-500 py-2 px-10 text-xl cursor-pointer ${buttonStyle}`}
      onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
