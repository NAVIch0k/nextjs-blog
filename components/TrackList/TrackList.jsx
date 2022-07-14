import TrackItem from "./TrackItem"
import s from './TrackList.module.scss'

function TrackList({ tracks }) {
  return (
    <div className={s.tracks}>
      {
        tracks.map(el =>
          <TrackItem track={el} key={el.id} />
        )
      }
    </div>
  )
}

export default TrackList