const test = require('ava');
const RecipeModel = require('../../src/Model/RecipeModel.js');

test('RecipeModel -> Recipes get added to static PINNED_RECIPES property', t => {
	let recipe1 = new RecipeModel({id:1});
	let recipe2 = new RecipeModel({id:2});

	RecipeModel.pinRecipe(recipe1, recipe2);

	t.is(RecipeModel.PINNED_RECIPES.length, 2);

	let recipe3 = new RecipeModel({id:3});

	RecipeModel.pinRecipe(recipe3);
	t.is(RecipeModel.PINNED_RECIPES.length, 3);
});

test('RecipeModel -> Recipes get removed from static PINNED_RECIPES property', t => {
	let recipe = RecipeModel.PINNED_RECIPES[1];

	RecipeModel.unpinRecipe(recipe);
	t.is(RecipeModel.PINNED_RECIPES.length, 2);
});
