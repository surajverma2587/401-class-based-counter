import { Banner } from "./components/Banner";
import { Counter } from "./components/Counter";
import { HookCounter } from "./components/HookCounter";

export const App = () => {
  return (
    <div>
      <Banner />
      <Counter />
      <HookCounter />
    </div>
  );
};
