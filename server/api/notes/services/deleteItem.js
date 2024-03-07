import {
	OKAY_STATUS_CODE,
	SERVER_ERROR_STATUS_CODE,
} from '../../../constance.js'
import deleteItem from '../queries/deleteItem.js'
import getItems from '../queries/getItems.js'

export default function (req, res) {
	try {
		const { id } = req.params

		return deleteItem([id])
			.then(() => {
				return getItems().then(items => {
					res.status(OKAY_STATUS_CODE).send(items)
				})
			})
			.catch(e => {
				res.status(SERVER_ERROR_STATUS_CODE).end()
			})
	} catch (e) {
		res.status(SERVER_ERROR_STATUS_CODE).end()
	}
}
