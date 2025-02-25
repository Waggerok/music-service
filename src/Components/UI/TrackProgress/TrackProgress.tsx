import * as React from 'react';
import styles from './TrackProgress.module.css';

interface ITrackProgressProps {
    audioRef : React.RefObject<HTMLAudioElement | null>
}

const TrackProgress : React.FC<ITrackProgressProps> = ({ audioRef }) => {

    const [progress, setProgress] = React.useState(0)
    const [duration, setDuration] = React.useState(0);

    React.useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setProgress(audio.currentTime);
            setDuration(audio.duration || 0)
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', updateProgress);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('loadedmetadata', updateProgress);
        }
    }, [audioRef])

    const handleSeek = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Number(event.target.value)
            setProgress(Number(event.target.value))
        }
    };

    return (
        <div className={styles.progress}>
            <span>{formatTime(progress)}</span>
            <input
                type='range'
                min='0'
                max={duration || 1}
                value={progress}
                onChange={handleSeek}
            />
            <span>{formatTime(duration)}</span>
        </div>  
    )
};

const formatTime = (time : number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`
}



export default TrackProgress;