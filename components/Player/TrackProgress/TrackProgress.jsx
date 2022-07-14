import s from './TrackProgress.module.scss'

const TrackProgress = ({ left, right, onChange }) => {
    return (
        <div className={s.progress}>
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>{left} / {right}</div>
        </div>
    );
};

export default TrackProgress;
