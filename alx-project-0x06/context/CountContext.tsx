import { createContext, useContext, useState, ReactNode } from "react";

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}
const CounterContext = createContext<CountContextProps | undefined>(undefined);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => (count > 0 ? count - 1 : 0));

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

export const useCounter = (): CountContextProps => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};