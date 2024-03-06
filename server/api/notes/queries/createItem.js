import Item from '../model.js'

export default function (item) {
	console.log(item, 'tem')
	return Item.create(item)
}
