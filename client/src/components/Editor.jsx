import React from "react";
import MonacoEditor from "@monaco-editor/react";

function Editor({ code, onChange }) {
  return (
    <MonacoEditor
      height="90vh"
      defaultLanguage="javascript"
      theme="vs-dark"
      value={code}
      onChange={onChange}
    />
  );
}

export default Editor;
