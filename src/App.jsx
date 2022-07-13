import React from "react";
import { TodoContextProvider } from "./hooks/useTodo"
import Home from "./screen/Home";

function App() {
  return (
    <TodoContextProvider >
          <Home />
    </TodoContextProvider>
  );
}

export default App;
