import { useCallback, useState } from "react";
import { isKeyboardCodeAllowed } from "../utils/helpers";

const useTypings = (enabled: boolean) => {
  const [typed, setTyped] = useState<string>("");
  const [cursor, setCursor] = useState(0);
  const [totalTyped, setTotalTyped] = useState(0);

  const handleInputChange = useCallback(
    (inputValue: string) => {
      if (!enabled) return;

      setTyped(inputValue);
      setCursor(inputValue.length);
      setTotalTyped(inputValue.length);
    },
    [enabled]
  );

  const clearTyped = useCallback(() => {
    setTyped("");
    setCursor(0);
    setTotalTyped(0);
  }, []);

  return {
    typed,
    cursor,
    handleInputChange,
    clearTyped,
    totalTyped,
  };
};

export default useTypings;
