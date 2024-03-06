import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Note = new Schema({
	title: { type: String, require: true },
	text: { type: String, require: true },
	createdAt: { type: Number, required: true },
	updatedAt: { type: Number, required: true },
})

export default mongoose.model('Note', Note)
