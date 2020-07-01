import React from "react";
import StateSection from "./components/StateManagement";
import CustomHookSection from "./components/Customhook";
import UsingEffect from "./components/UsingEffect";
import UsingLayout from "./components/UsingLayout";

const App = () => {
  const state = true;
  return (
    <div>
      {state && <StateSection />}
      <CustomHookSection />
      <UsingEffect />
      <UsingLayout />
    </div>
  );
};

export default App;