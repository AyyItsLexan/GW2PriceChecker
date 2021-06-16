const RecipeModel = require("../Model/RecipeModel.js");
const BaseApi = require("./BaseApi.js");

class RecipeApi extends BaseApi{

	TYPE = "recipes/";


	constructor(itemId = ''){
		super();
		this.itemId = itemId;
	}

	async getData() {
		return super.getData().then(data => {
			let recipe = new RecipeModel(data);
			return recipe;
		});
	}
	
	buildURL(){
		return this.API_URL + this.TYPE + this.itemId;
	}
}

module.exports = RecipeApi;
