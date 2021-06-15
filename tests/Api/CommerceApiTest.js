const test = require('ava');
const CommerceApi = require('../../src/Api/CommerceApi.js');

test('CommerceApi connects with service', async t => {
	const commerceApi = new CommerceApi(200).getData();
	t.is(await commerceApi.then(data => {return data.id}), 200);
});
