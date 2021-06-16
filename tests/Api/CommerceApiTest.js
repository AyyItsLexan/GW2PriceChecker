const test = require('ava');
const CommerceApi = require('../../src/Api/CommerceApi.js');

test('CommerceApi -> Connects with service', async t => {
	const commerceApi = new CommerceApi(200).getData();
	await commerceApi.then(data => {
		t.is(data.id, 200);
	});
	let id = await commerceApi.then(data => {return data.id})
	t.is(id, 200);
});

test('CommerceApi -> Mithril buy price is lower equals sells price', async t => {
	const commerceApi = new CommerceApi(19700).getData();
	let prices = await commerceApi.then(data => {
		return {buys: data.buys, sells: data.sells};
	});
	t.is(prices.buys.unitPrice <= prices.sells.unitPrice, true);
});

test('CommerceApi -> Invalid ItemIds return false', async t => {
	const commerceApi = new CommerceApi(1).getData();
	await commerceApi.then(data => {
		t.is(data, false);
	});
});

test('CommerceApi -> Url builds correctly', t => {
	const commerceApi = new CommerceApi(200);
	t.is(commerceApi.buildURL(), 'https://api.guildwars2.com/v2/commerce/prices/200');
});
