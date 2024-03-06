import {
	OKAY_STATUS_CODE,
	SERVER_ERROR_STATUS_CODE,
} from '../../../constance.js'

import getItems from '../queries/getItems.js'

export default function (req, res) {
	try {
		getItems()
			.then(items => {
				const sortedItems = items.sort(
					(prev, next) => next.createdAt - prev.createdAt
				)

				res.status(OKAY_STATUS_CODE).send(sortedItems)
			})
			.catch(() => {
				res.status(SERVER_ERROR_STATUS_CODE).end()
			})
	} catch (e) {
		res.status(SERVER_ERROR_STATUS_CODE).end()
	}
}
