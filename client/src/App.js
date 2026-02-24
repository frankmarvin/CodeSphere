import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import { socket } from "./socket/socket";
import "./styles/editor.css";

function App() {
  const [code, setCode] = useState("");

  useEffect(() => {
    socket.on("code-update", (newCode) => {
      setCode(newCode);
    });

    return () => socket.off("code-update");
  }, []);

  const handleChange = (value) => {
    setCode(value);
    socket.emit("code-change", value);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>CodeSphere</h1>
      </header>
      <Editor code={code} onChange={handleChange} />
    </div>
  );
}

export default App;
