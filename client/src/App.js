import { useEffect, useState } from 'react'
import styles from './app.module.scss'
import Note from './components/Note/index.jsx'
import './index.css'
import createNote from './services/createNote.js'
import editNote from './services/editNote.js'
import getAllNotes from './services/getAllNotes.js'

const initInputsValues = { title: '', text: '' }

function App() {
	const [notes, setNotes] = useState([])
	const [inputsValue, setInputsValue] = useState(initInputsValues)
	const [mode, setMode] = useState('create')
	const [editId, setEditId] = useState('')

	useEffect(() => {
		getAllNotes().then(notes => {
			setNotes(notes)
		})
	}, [])

	const handleEditClick = (title, text, id) => {
		setMode('edit')
		setInputsValue({ title, text })
		setEditId(id)
	}

	const handleChangeNotes = notes => {
		setNotes(notes)
	}

	const handleInput = (name, value) => {
		setInputsValue(prev => {
			return { ...prev, [name]: value }
		})
	}

	const handleClickMainBtn = () => {
		if (!inputsValue.title.length || !inputsValue.text.length) {
			alert('Fill inputs!!!')
		} else {
			const request = mode === 'create' ? createNote : editNote
			request({ payload: inputsValue, id: editId }).then(() => {
				setMode('create')
				getAllNotes().then(notes => {
					setNotes(notes)
				})
			})
		}
	}

	return (
		<div className='App'>
			<h1 className={styles.title}>Korzhov Ivan Notes</h1>

			<div className={styles.createNewBlock}>
				<button onClick={handleClickMainBtn} className={styles.btn}>
					{mode === 'create' ? 'Create note' : 'Edit note'}
				</button>
				<input
					className={styles.input}
					value={inputsValue.title}
					name={'title'}
					placeholder={'title'}
					onChange={e => handleInput(e.target.name, e.target.value)}
				/>
				<textarea
					className={styles.textarea}
					name={'text'}
					placeholder={'Describe your note'}
					value={inputsValue.text}
					onChange={e => handleInput(e.target.name, e.target.value)}
				/>
			</div>
			<div className={styles.notes}>
				{notes.map((note, key) => (
					<Note
						id={note._id}
						title={note.title}
						text={note.text}
						key={key}
						handleChangeNotes={handleChangeNotes}
						handleEditClick={handleEditClick}
					/>
				))}
			</div>
		</div>
	)
}

export default App
