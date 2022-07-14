import { useDispatch, useSelector } from "react-redux"
import { alphabetDown, alphabetTop } from "../../store/tracksReducer"
import TrackItem from "./TrackItem"
import s from './TrackList.module.scss'

function TrackList() {

  const tracks = useSelector(state => state.tracks.tracks)
  let dispatch = useDispatch()

  let lol = (e) => {
    if (e==1) {
      dispatch(alphabetDown())
    } else {
      dispatch(alphabetTop())
    }
  }

  return (
    <div className={s.tracks}>
      <select onChange={(e) => lol(e.target.value)}>
        <option value={1}>Сортировка по алфавиту вниз</option>
        <option value={2}>Сортировка по алфавиту вверх</option>
      </select>
      {
        tracks.map(el =>
          <TrackItem track={el} key={el.id} />
        )
      }
    </div>
  )
}

export default TrackList