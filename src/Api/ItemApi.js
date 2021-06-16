const ItemModel = require("../Model/ItemModel.js");
const BaseApi = require("./BaseApi.js");

class ItemsApi extends BaseApi{

	TYPE = "items?";
	IDS_QUERY = "ids=";
	LOCALE_QUERY = "lang=";
	QUERY_SEPARATOR = "&";

	constructor(itemId, locale = "en"){
		super();
		this.itemId = itemId;
		this.locale = locale;
	}

	async getData() {
		return super.getData().then(data => {
			let item;
			if (Number.isInteger(this.itemId)) {
				item = new ItemModel(data[0]);
			} else {
				item = [];
				data.forEach(element => {
					element = new ItemModel(element);
					item.push(element);
				});
			}
			return item;
		});
	}
	
	buildURL(){
		return this.API_URL + this.TYPE + this.IDS_QUERY + this.itemId + this.QUERY_SEPARATOR + this.LOCALE_QUERY + this.locale;
	}
}

module.exports = ItemsApi;
