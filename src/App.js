import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [filePath, setFilePath] = useState(null);

  useEffect(() => {
    if (window.electronAPI?.onMenuAction) {
      window.electronAPI.onMenuAction(async (_event, action) => {
        if (action === 'new') {
          if (window.confirm("Start a new file? Unsaved changes will be lost.Please Confirm for changes!!")) {
            setText('');
            setFilePath(null);
          }
        } else if (action === 'open') {
          const result = await window.electronAPI.openFile();
          if (result) {
            setText(result.content);
            setFilePath(result.path);
          }
        } else if (action === 'save') {
          if (filePath) {
            await window.electronAPI.saveFile({ path: filePath, content: text });
          } else {
            const path = await window.electronAPI.saveAs(text);
            if (path) setFilePath(path);
          }
        } else if (action === 'saveAs') {
          const path = await window.electronAPI.saveAs(text);
          if (path) {
            await window.electronAPI.saveFile({ path, content: text });
            setFilePath(path);
          }
        }
      });
    }
  }, [text, filePath]);

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Start typing..."
      style={{
        width: '100%',
        height: '100vh',
        fontSize: '16px',
        fontFamily: 'monospace',
        border: 'none',
        outline: 'none',
        padding: '12px',
        resize: 'none',
        boxSizing: 'border-box'
      }}
    />
  );
}

export default App;
