import request from 'superagent'
import base from './base'

export default function getAllNotes() {
	return base(request.get('/server/api/note'))
}
