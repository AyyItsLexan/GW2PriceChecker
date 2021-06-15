const https = require('https');

class BaseApi{

	API_URL = "https://api.guildwars2.com/v2/";

	async getData(){
		return new Promise((resolve, reject) => {
			https.get(this.buildURL(), (resp) => {
				let data = '';
	
				// A chunk of data has been recieved.
				resp.on('data', (chunk) => {
					data += chunk;
				});
	
				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					try {
						resolve(JSON.parse(data));
					} catch (e) {
						reject(e.message);
					}
				});

			}).on("error", (err) => {
				console.log("Error. " + err.message);
			});
		})
	}

}
module.exports = BaseApi;