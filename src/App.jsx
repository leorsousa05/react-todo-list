import React from "react";
import AllTodos from "./components/AllTodos/AllTodos";
import { TodoContextProvider } from "./hooks/useTodo"

function App() {
  return (
    <TodoContextProvider >
      <div className="App">
          <AllTodos />
      </div>
    </TodoContextProvider>
  );
}

export default App;
