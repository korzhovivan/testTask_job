import pathOr from 'ramda/src/pathOr'
import superagentPrefix from 'superagent-prefix'
import { PUBLIC_API_URL } from '../constants.js'

export default function base(request) {
	return new Promise((resolve, reject) => {
		request.use(superagentPrefix(PUBLIC_API_URL)).end((err, res) => {
			if (err) {
				return reject(pathOr({}, ['response', 'body'], err))
			}

			resolve(res.body || res.text)
		})
	})
}
