const { app, BrowserWindow } = require('electron');
const CommerceApi = require("./src/Api/CommerceApi.js");

function createWindow () {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	});

	win.loadFile('src/View/index.html');
}

app.whenReady().then(() => {
	createWindow();
});
