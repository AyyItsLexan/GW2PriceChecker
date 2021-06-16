const BaseModel = require('./BaseModel.js');
const ItemApi = require('../Api/ItemApi.js');

class RecipeModel extends BaseModel {
	static PINNED_RECIPES = [];

	constructor(recipeObject) {
		super();
		this.id = recipeObject.id;
		this.outputItemId = recipeObject.output_item_id;
		new ItemApi(recipeObject.output_item_id).getData().then(data => {
			this.outputItem = data;
		});
		this.outputItemCount = recipeObject.output_item_count;
		this.disciplines = recipeObject.disciplines;
		this.ingredients = recipeObject.ingredients;

	}

	static pinRecipe(...recipe) {
		RecipeModel.PINNED_RECIPES = [...RecipeModel.PINNED_RECIPES, ...recipe];
	}

	static unpinRecipe(recipe) {
		RecipeModel.PINNED_RECIPES = RecipeModel.PINNED_RECIPES.filter(function(value) {
			return !Object.is(recipe, value)
		});
	}
}

module.exports = RecipeModel;
