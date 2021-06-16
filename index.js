const { app, BrowserWindow } = require('electron');
const CommerceApi = require("./src/Api/CommerceApi.js");
const ItemApi = require("./src/Api/ItemApi.js");
const RecipeApi = require("./src/Api/RecipeApi.js");

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
	new RecipeApi(200).getData().then(data => {
		console.log(data)
	});

});
