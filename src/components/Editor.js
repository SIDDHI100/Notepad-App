import React from 'react';

const Editor = ({ text, setText }) => {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{
        width: '100%',
        height: 'calc(100vh - 32px)', // subtracting menu bar height
        padding: '10px',
        fontSize: '16px',
        fontFamily: 'consolas, monospace',
        boxSizing: 'border-box',
        border: 'none',
        outline: 'none',
        resize: 'none',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'break-word',
        backgroundColor: '#ffffff',
        color: '#000000'
      }}
      spellCheck={false}
    />
  );
};

export default Editor;
