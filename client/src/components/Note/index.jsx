import deleteNote from '../../services/deleteNote.js'
import editIcon from './images/edit.svg'
import trashBinIcon from './images/trash.svg'
import styles from './index.module.scss'

function Note({ title, text, id, handleChangeNotes, handleEditClick }) {
	const handleDeleteClick = id => {
		deleteNote(id).then(notes => {
			handleChangeNotes(notes)
		})
	}

	return (
		<div className={styles.note}>
			<div>
				<p className={styles.title}>{title}</p>
				<p>{text}</p>
			</div>
			<div className={styles.btns}>
				<button
					className={styles.btn}
					onClick={() => handleEditClick(title, text, id)}
				>
					<img src={editIcon} className={styles.editIcon} />
					Edit
				</button>
				<button className={styles.btn} onClick={() => handleDeleteClick(id)}>
					<img src={trashBinIcon} className={styles.trashIcon} />
					Delete
				</button>
			</div>
		</div>
	)
}

export default Note
