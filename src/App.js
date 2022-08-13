import { useEffect } from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import noteService from './services/notes'
import { setNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux/es/exports'
import { initializeConnect } from 'react-redux/es/components/connect'
import { initializeNotes } from './reducers/noteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeNotes())
    },[dispatch])

   return (
    <div>
      <NewNote />
      <VisibilityFilter/>a
      <Notes  />
    </div>
  )
}

export default App