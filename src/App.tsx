import React from "react";
import GeneratedWords from "./components/GeneratedWords";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import useTypings from "./hooks/useTypings";
import { calculateAccuracyPercentage } from "./utils/helpers";
import Header from "./components/Header";

const App: React.FC = () => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } = useEngine();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 overflow-hidden p-2 md:p-6" >
      <Header />
      <div className="flex flex-col items-center px-4 md:px-20" style={{marginTop: "60px" }}>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords key={words} words={words} />
        {/* User typed characters will be overlayed over the generated words */}
        <UserTypings
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
      </div>
    </div>
  );
};

interface WordsContainerProps {
  children: React.ReactNode;
}

const WordsContainer: React.FC<WordsContainerProps> = ({ children }) => {
  return (
    <div className="relative text-3xl leading-relaxed break-all mt-3" >
      {children}
    </div>
  );
};

interface CountdownTimerProps {
  timeLeft: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
