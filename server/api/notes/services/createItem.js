import {
	MONGODB_DUPLICATE_CODE,
	NOT_FOUND_STATUS_CODE,
	OKAY_STATUS_CODE,
	SERVER_ERROR_STATUS_CODE,
} from '../../../constance.js'
import createItem from '../queries/createItem.js'

export default function (req, res) {
	try {
		console.log(req.body, 'req.body')
		const { title, text } = req.body
		console.log(title, text)
		const now = Date.now()

		createItem({ title, text, createdAt: now, updatedAt: now })
			.then(item => {
				res.status(OKAY_STATUS_CODE).send(item)
			})
			.catch(err => {
				if (err.code === MONGODB_DUPLICATE_CODE) {
					return res.status(NOT_FOUND_STATUS_CODE).send({ code: 'duplication' })
				}

				res.status(SERVER_ERROR_STATUS_CODE).send({ err: 'err1' })
			})
	} catch (e) {
		res.status(SERVER_ERROR_STATUS_CODE).send({ err: 'err2' })
	}
}
