import React from "react";
import StateSection from "./components/StateManagement";
import CustomHookSection from "./components/Customhook";
import UsingEffect from "./components/UsingEffect";
import UsingLayout from "./components/UsingLayout";
import Usingcallback from "./components/Usingcallback";
import Usingreducer from "./components/Usingreducer";
import TodoList from "./components/TodoList";
import Test from "./components/Test";

const App = () => {
  const state = true;
  return (
    <div>
      {state && <StateSection />}
      <CustomHookSection />
      <UsingEffect />
      <UsingLayout />
      <Usingcallback />
      <Usingreducer />
      <TodoList />
      <Test />
    </div>
  );
};

export default App;