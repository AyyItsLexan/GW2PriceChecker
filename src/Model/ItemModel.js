const BaseModel = require('./BaseModel.js');

class ItemModel extends BaseModel {
	constructor(itemObject) {
		super();
		this.id = itemObject.id;
		this.name = itemObject.name;
		this.icon = itemObject.icon;
	}
}

module.exports = ItemModel;
