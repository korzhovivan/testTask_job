import {
	MONGODB_DUPLICATE_CODE,
	NOT_FOUND_STATUS_CODE,
	OKAY_STATUS_CODE,
	SERVER_ERROR_STATUS_CODE,
} from '../../../constance.js'

import editItem from '../queries/editItem.js'

export default function (req, res) {
	try {
		const { title, text } = req.body
		const { id } = req.params
		const now = Date.now()

		editItem(id, { title, text, updatedAt: now })
			.then(item => {
				res.status(OKAY_STATUS_CODE).send(item)
			})
			.catch(err => {
				if (err.code === MONGODB_DUPLICATE_CODE) {
					return res.status(NOT_FOUND_STATUS_CODE).send({ code: 'duplication' })
				}

				res.status(SERVER_ERROR_STATUS_CODE).end()
			})
	} catch (e) {
		res.status(SERVER_ERROR_STATUS_CODE).end()
	}
}
