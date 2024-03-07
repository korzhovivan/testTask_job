import request from 'superagent'
import base from './base.js'

export default function (id) {
	return base(request.delete(`/server/api/note/${id}`))
}
