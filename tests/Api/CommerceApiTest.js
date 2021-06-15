const test = require('ava');
const CommerceApi = require('../../src/Api/CommerceApi.js');

test('CommerceApi connects with service', async t => {
	const commerceApi = new CommerceApi(200).getData();
	await commerceApi.then(data => {
		t.is(data.id, 200);
	});
	let id = await commerceApi.then(data => {return data.id})
	t.is(id, 200);
});

test('Item id 1 does not return an item', async t => {
	const commerceApi = new CommerceApi(1).getData();
	await commerceApi.then(data => {
		t.is(data, false);
	});
})

test('CommerceApi url is correct', t => {
	const commerceApi = new CommerceApi(200);
	t.is(commerceApi.buildURL(), "https://api.guildwars2.com/v2/commerce/prices/200");
});
