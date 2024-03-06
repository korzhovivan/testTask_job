import express from 'express'

import createItem from './services/createItem.js'
import deleteItem from './services/deleteItem.js'
import editItem from './services/editItem.js'
import getItems from './services/getItems.js'

const router = express.Router()

router.route('/').get(getItems).post(createItem)

router.route('/:id').put(editItem).delete(deleteItem)

export default router
