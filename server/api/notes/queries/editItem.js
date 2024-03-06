import Item from '../model.js'

export default function (_id, item) {
	return Item.findByIdAndUpdate(_id, item, { new: true })
}
