const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
    minimizarJanela: () => { 
        ipcRenderer.send("minimizar-janela")
    },
    maximizarJanela: () => { 
        ipcRenderer.send("maximizar-janela") 
    },
    fecharJanela: () => { 
        ipcRenderer.send("fechar-janela") 
    }
})