const ItemsApi = require('../Api/ItemApi.js');
const BaseModel = require('./BaseModel.js');

class PricesModel extends BaseModel {
	constructor(priceObject) {
		super();
		this.id = priceObject.id;
		this.item = new ItemsApi(priceObject.id).getData().then(data => {
			return data;
		})
		this.buys = {
			quantity: priceObject.buys.quantity,
			unitPrice: priceObject.buys.unit_price,
		}
		this.sells = {
			quantity: priceObject.sells.quantity,
			unitPrice: priceObject.sells.unit_price,
		}
	}
}

module.exports = PricesModel;
