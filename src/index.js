const { app, BrowserWindow, ipcMain} = require("electron")
const { join } = require("path")

app.whenReady()
    .then(() => {
        const janela = new BrowserWindow ({
            autoHideMenuBar: true,
            frame: false,
            icon: join(__dirname, "./public/icon.png"),
            minHeight: 600,
            minWidth: 512,
            title: "Station",
            webPreferences: { preload: join(__dirname, ("preload.js"))}
        })
        ipcMain.on("Minimizar", () => {janela.minimize()})
        ipcMain.on("Maximizar", () => {janela.isMaximized? janela.unmaximize() : janela.maximize()})
        ipcMain.on("Fechar", () => {app.quit})

        janela.loadFile( join(__dirname, "./public/PaginaInicio.html"))
    })