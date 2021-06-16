const PricesModel = require("../Model/PriceModel.js");
const BaseApi = require("./BaseApi.js");

class CommerceApi extends BaseApi{

	TYPE = "commerce/prices/";

	constructor(itemId){
		super();
		this.itemId = itemId;
	}

	getData() {
		return super.getData().then(data => {
			if (data.text === 'no such id') {
				return false;
			}
			data = new PricesModel(data);
			return data;
		});
	}
	
	buildURL(){
		return this.API_URL + this.TYPE + this.itemId
	}
}

module.exports = CommerceApi;
