import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdKeyboard } from "react-icons/md";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-slate-900 p-4 md:px-20 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mt-1">
          <MdKeyboard className="text-2xl md:text-3xl mr-2" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold">Typing Master</h1>
      </div>
      <a
        href="https://github.com/kshivam30/typing-master.git"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl md:text-3xl"
      >
        <FaGithub />
      </a>
    </header>
  );
};

export default Header;
