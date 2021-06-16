const { app, BrowserWindow } = require('electron');
const CommerceApi = require("./src/Api/CommerceApi.js");
const ItemApi = require("./src/Api/ItemApi.js");

function createWindow () {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: './preload.js'
		}
	});

	win.loadFile('src/View/index.html');
}

app.whenReady().then(() => {
	createWindow();
	new ItemApi(30689).getData().then(data => {
		console.log(data)
	});
});
