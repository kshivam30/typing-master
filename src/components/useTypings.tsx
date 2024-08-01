import React, { useRef, useEffect } from "react";
import cn from "classnames";
import Caret from "./Caret";

interface UserTypingsProps {
  userInput: string;
  words: string;
  onInputChange: (input: string) => void;
  className?: string;
}

const UserTypings: React.FC<UserTypingsProps> = ({
  userInput,
  words,
  onInputChange,
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className={className} onClick={handleContainerClick}>
      <input
        ref={inputRef}
        type="text"
        className="absolute opacity-0 pointer-events-none"
        value={userInput}
        onChange={handleChange}
        autoFocus
      />
      {userInput.split("").map((char, index) => (
        <Character key={`${char}_${index}`} actual={char} expected={words[index]} />
      ))}
      <Caret />
    </div>
  );
};

const Character = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  return (
    <span
      className={cn({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-primary-400": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
};

export default UserTypings;
