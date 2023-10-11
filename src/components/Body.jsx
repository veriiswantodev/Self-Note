import Input from '../components/Input'
import Archived from '../components/Archived'
import Active from './Active'

export default function Body({notes, onDelete, onArchive, onActive, addNote}) {
  
  return (
    <>
        <Input addNote={addNote} />
        <h2 className='mt-3'>Catatan Aktif</h2>
        <hr />
        <Active notes={notes.filter(note => note.archived === false)} onDelete={onDelete} onArchive={onArchive}/>
        <h2 className='mt-3'>Catatan Archive</h2>
        <hr />
        <Archived notesList={notes.filter(note => note.archived === true)} onDelete={onDelete} onActive={onActive}/>
    </>
  )
}
