const BaseApi = require("./BaseApi.js");

class CommerceApi extends BaseApi{

	TYPE = "commerce/prices/";

	constructor(itemId){
		super();
		this.itemId = itemId;
	}
	
	buildURL(){
		return this.API_URL + this.TYPE + this.itemId
	}


}
module.exports = CommerceApi;