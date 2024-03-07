import request from 'superagent'
import base from './base'

export default function ({ payload }) {
	return base(request.post('/server/api/note').send(payload))
}
