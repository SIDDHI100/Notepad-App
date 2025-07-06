import React, { useState, useEffect, useRef } from 'react';

const MenuBar = ({ onNew, onOpen, onSave, onSaveAs, onExit }) => {
  const [showFileMenu, setShowFileMenu] = useState(false);
  const menuRef = useRef();

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowFileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#e0e0e0',
      padding: '4px 10px',
      fontFamily: 'sans-serif',
      userSelect: 'none',
      position: 'relative'
    }}>
      <div
        style={{ marginRight: '20px', cursor: 'pointer' }}
        onClick={() => setShowFileMenu(!showFileMenu)}
      >
        File ▾
      </div>

      {showFileMenu && (
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            top: '25px',
            left: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            border: '1px solid #ccc',
            zIndex: 10
          }}
        >
          <div onClick={onNew} style={menuStyle}>New</div>
          <div onClick={onOpen} style={menuStyle}>Open</div>
          <div onClick={onSave} style={menuStyle}>Save</div>
          <div onClick={onSaveAs} style={menuStyle}>Save As</div>
          <div onClick={onExit} style={menuStyle}>Exit</div>
        </div>
      )}
    </div>
  );
};

const menuStyle = {
  padding: '6px 20px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fontSize: '14px'
};

export default MenuBar;
