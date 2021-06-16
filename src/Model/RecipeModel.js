const BaseModel = require('./BaseModel.js');

class RecipeModel extends BaseModel {
	static PINNED_RECIPES = [];

	constructor(recipeObject) {
		super();
		this.id = recipeObject.id;
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
