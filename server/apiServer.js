import bodyParser from 'body-parser'
import notesApi from './api/notes/index.js'

export default app => {
	app.use(
		bodyParser.urlencoded({
			extended: true,
		})
	)

	app.use('/server/api/notes', notesApi)
}
