import React, { useState, useCallback } from "react";
import "./App.css";

import UserList from "./components/UserList";
import User from "./components/User";
const App = () => {
  const [id, setId] = useState("2");
  const handleIdChange = (newId: string) => {
    console.log("Hej");
    setId(newId);
  };

  return (
    <div className="App">
      <UserList handleIdChange={handleIdChange} />
      <User id={id} />
    </div>
  );
};

export default App;
