import {
	OKAY_STATUS_CODE,
	SERVER_ERROR_STATUS_CODE,
} from '../../../constance.js'

export default function (req, res) {
	try {
		const { id } = req.params

		return deleteItems(id)
			.then(() => {
				return getItems().then(items => {
					res.status(OKAY_STATUS_CODE).send(items)
				})
			})
			.catch(() => {
				res.status(SERVER_ERROR_STATUS_CODE).end()
			})
	} catch (e) {
		res.status(SERVER_ERROR_STATUS_CODE).end()
	}
}
