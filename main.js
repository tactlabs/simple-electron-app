const electron = require('electron');
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

var mainWindow;
app.on('ready', function(){
	mainWindow = new BrowserWindow({width: 1024, height: 768, backagrounColor:'#2e2c29'});
	
	mainWindow.loadURL('https://github.com');
});