const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 640,
      resizable: false,
      title: "Dead By Daylight Config Editor",
      icon: "./build/icon.png",
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    })
    
    win.loadFile('./app/index.html');
    win.setMenuBarVisibility(false);
    win.webContents.on('new-window', function(e, url) {
      e.preventDefault();
      require('electron').shell.openExternal(url);
    });
};

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});