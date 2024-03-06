import Item from '../model.js'

export default function (ids) {
	return Item.deleteMany({ _id: { $in: [id] } })
}
