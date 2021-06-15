const https = require('https');

class BaseApi{

	API_URL = "https://api.guildwars2.com/v2/";

	getData(){
		https.get(this.buildURL(),(resp) => {
			let data = '';

			// A chunk of data has been recieved.
			resp.on('data', (chunk) => {
				data += chunk;
			});

			// The whole response has been received. Print out the result.
			resp.on('end', () => {
				console.log(JSON.parse(data));
				console.log(JSON.parse(data).buys.quantity);
				console.log(JSON.parse(data).buys.unit_price);
				console.log(JSON.parse(data).sells.quantity);
				console.log(JSON.parse(data).sells.unit_price);
			});



		}).on("error", (err) => {
			console.log("Error. " + err.message);
		});
	}

}
module.exports = BaseApi;