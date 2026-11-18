const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
if (!app.requestSingleInstanceLock()) app.quit();
function create() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({
    width: 1280, height: 800, show: false,
    title: 'Carte scolaire – IEF Oussouye',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: { contextIsolation: true }
  });
  w.maximize(); w.show();
  w.loadFile(path.join(__dirname, 'www', 'index.html'));
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
