import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import notesApi from './api/notes/index.js'

export default app => {
	app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
	app.use(bodyParser.json({ limit: '50mb', extended: true }))
	app.use(cors())
	app.use(compression())

	app.use('/server/api/note', notesApi)
}
