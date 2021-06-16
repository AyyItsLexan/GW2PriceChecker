const https = require('https');

class BaseApi{

	API_URL = "https://api.guildwars2.com/v2/";

	getData(){
		return new Promise((resolve, reject) => {
			https.get(this.buildURL(), (resp) => {
				let data = '';

				resp.on('data', (chunk) => {
					data += chunk;
				});

				resp.on('end', () => {
					try {
						data = JSON.parse(data);
						resolve(data);
					} catch (e) {
						reject(e.message);
					}
				});

			}).on("error", (err) => {
				console.log("Error. " + err.message);
			});
		});
	}
}

module.exports = BaseApi;
