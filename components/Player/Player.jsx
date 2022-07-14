import s from './Player.module.scss'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { pauseTrack, playTrack, setCurrentTime, setDuration, setVolume, setPrevTrack, setNextTrack } from '../../store/playerReducer'
//components
import TrackProgress from './TrackProgress/TrackProgress';
//icon
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

let audio

const Player = () => {

  const dispatch = useDispatch()
  const tracks = useSelector(state => state.tracks.tracks)
  const { currentTime, duration, active, volume, pause } = useSelector(state => state.player)
  let [isPause, setIsPause] = useState(true)
  let [prevMusic, setPrevMusic] = useState()

  useEffect(() => {
    if (!audio) {
      audio = new Audio()
    } else {
      if (active.id != prevMusic?.id || !prevMusic) {
        setPrevMusic(active)
        setAudio()
        revplay()
      }
      if (pause != isPause) {
        revplay()
      }
    }
  }, [active, pause])

  const setAudio = () => {
    if (active) {
      audio.src = active.href
      audio.volume = volume / 100
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)))
      }
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)))
      }
    }
  }

  const revplay = () => {
    if (!pause) {
      setIsPause(false)
      dispatch(playTrack())
      audio.play()
    } else {
      setIsPause(true)
      dispatch(pauseTrack())
      audio.pause()
    }
  }

  const play = () => {
    if (pause) {
      setIsPause(false)
      dispatch(playTrack())
      audio.play()
    } else {
      setIsPause(true)
      dispatch(pauseTrack())
      audio.pause()
    }
  }

  const changeVolume = (e) => {
    audio.volume = Number(e.target.value) / 100
    dispatch(setVolume(Number(e.target.value)))
  }
  const changeCurrentTime = (e) => {
    audio.currentTime = Number(e.target.value)
    dispatch(setCurrentTime(Number(e.target.value)))
  }

  if (!active) {
    return null
  }

  return (
    <div className={s.player}>
      <div className={s.player__wrap}>
        <div className={s.player__event}>
          <div className={s.player__event__player}>
            <button onClick={() => dispatch(setPrevTrack({ tracks, active: active.id }))}>
              <SkipPreviousIcon />
            </button>
            <button onClick={play} className={s.player__event__play}>
              {
                pause ?
                  <PlayArrowIcon />
                  :
                  <PauseIcon />
              }
            </button>
            <button onClick={() => dispatch(setNextTrack({ tracks, active: active.id }))}>
              <SkipNextIcon />
            </button>
          </div>
          <div>
            <p>{active.name}</p>
            <p>{active.artist}</p>
          </div>
        </div>
        <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
        <VolumeUpIcon style={{ marginLeft: 'auto' }} />
        <TrackProgress left={volume} right={100} onChange={changeVolume} />
      </div>
    </div>
  )
}

export default Player