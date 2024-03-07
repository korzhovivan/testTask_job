import request from 'superagent'
import base from './base.js'

export default function ({ payload, id }) {
	return base(request.put(`/server/api/note/${id}`).send(payload))
}
