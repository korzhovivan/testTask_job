import Item from '../model.js'

export default function (id) {
	return Item.deleteMany({ _id: { $in: id } })
}
