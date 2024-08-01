import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdKeyboard } from "react-icons/md";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-slate-900 p-4 px-20 flex justify-between items-center">
      <div className="flex items-center">
        <div style={{marginTop: "3px"}}>
        <MdKeyboard className="text-3xl mr-2" />
        </div>
        <h1 className="text-2xl font-bold">Typing Master</h1>
      </div>
      <a
        href="https://github.com/yourusername/your-repo-name"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl"
      >
        <FaGithub />
      </a>
    </header>
  );
};

export default Header;
