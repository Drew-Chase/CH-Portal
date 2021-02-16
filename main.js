const { app, BrowserWindow, Tray, Menu } = require('electron')
const icon = require('path').join(__dirname, 'src', 'img', 'icon.ico')
var win;
function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        frame: false,
        icon: icon,
        title: "CH - Portal",
    })

    win.setMenu(null)
    win.setMenuBarVisibility(false)

    win.loadFile('src/html/index.html')
}

function createTray() {
    tray = new Tray(icon);
    tray.addListener('double-click', () => {
        win.show();
    })
    tray.setContextMenu(Menu.buildFromTemplate(
        [
            {
                label: "CH-Portal",
                enabled: false
            },
            {
                label: "Open CH-Portal",
                click: () => { win.show() }
            },
            {
                label: "Quit CH-Portal",
                click: () => { app.quit() }
            }
        ]
    ))
}

app.whenReady().then(createWindow).then(createTray).then(() => win.hide());

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        win.hide();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})