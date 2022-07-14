import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import s from './TrackItem.module.scss'
import { pauseTrack, playTrack, setActiveTrack } from '../../store/playerReducer'
import { useDispatch, useSelector } from 'react-redux';

const TrackItem = ({ track }) => {

    let dispatch = useDispatch()

    const activeMusic = useSelector(state => state.player.active)
    const isPause = useSelector(state => state.player.pause)

    const play = (e) => {
        e.stopPropagation()
        if (activeMusic&&activeMusic.id==track.id) {
            if (isPause) {
                dispatch(playTrack())
            } else {
                dispatch(pauseTrack())
            }
        } else {
            console.log(track);
            dispatch(setActiveTrack(track))
            dispatch(playTrack())
        }
    }

    return (
        <div className={s.track}>
            <div className={s.track__wrap}>
                <button className={s.track__button} onClick={play}>
                    {
                        track.id == activeMusic?.id && !isPause ?
                            <PauseIcon />
                            :
                            <PlayArrowIcon />
                    }
                </button>
                <img src={track.img} />
                <div>
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                </div>
            </div>
            <div>
                <p>02:42 / 03:34</p>
            </div>
        </div>
    )
}

export default TrackItem