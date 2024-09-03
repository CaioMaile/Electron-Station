const { cotextBridge, ipcRenderer, contextBridge } = require("electron")

contextBridge.exposeInMainWorld("electron", {
    Minimizar: () => {ipcRenderer.send("Minimizar")},
    Maximizar: () => {ipcRenderer.send('Maximizar')},
    Fechar: () => {ipcRenderer.send("Fechar")}
})