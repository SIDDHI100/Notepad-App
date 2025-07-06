const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('open-file'),
  saveFile: (args) => ipcRenderer.invoke('save-file', args),
  saveAs: (text) => ipcRenderer.invoke('save-as', text),
  onMenuAction: (callback) => ipcRenderer.on('menu-action', callback)
});





