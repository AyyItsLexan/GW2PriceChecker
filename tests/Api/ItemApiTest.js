const test = require('ava');
const ItemApi = require('../../src/Api/ItemApi.js');
const ItemModel = require('../../src/Model/ItemModel.js');

test('CommerceApi -> Connects with service', async t => {
	await new ItemApi(30689).getData().then(data => {
		t.is(data.id, 30689);
	});
});

test('ItemApi -> Item name is right', async t => {
	await new ItemApi(30689).getData().then(data => {
		t.is(data.name, 'Eternity')
	});
});

test('ItemApi -> Item icon is right', async t => {
	await new ItemApi(30689).getData().then(data => {
		t.is(data.icon, 'https://render.guildwars2.com/file/A30DA1A1EF05BD080C95AE2EF0067BADCDD0D89D/456014.png')
	});
});

test('ItemApi -> getData() creates an ItemModel', async t => {
	await new ItemApi(30689).getData().then(data => {
		t.is(data instanceof ItemModel, true)
	});
});

test('ItemApi -> Url builds correctly with default locale', t => {
	const commerceApi = new ItemApi(30689);
	t.is(commerceApi.buildURL(), 'https://api.guildwars2.com/v2/items?ids=30689&lang=en');
	const commerceApi2 = new ItemApi([30689, 1234]);
	t.is(commerceApi2.buildURL(), 'https://api.guildwars2.com/v2/items?ids=30689,1234&lang=en');
});

test('ItemApi -> Url builds correctly with de locale', t => {
	const commerceApi = new ItemApi(30689, 'de');
	t.is(commerceApi.buildURL(), 'https://api.guildwars2.com/v2/items?ids=30689&lang=de');
	const commerceApi2 = new ItemApi([30689, 1234], 'de');
	t.is(commerceApi2.buildURL(), 'https://api.guildwars2.com/v2/items?ids=30689,1234&lang=de');
});
