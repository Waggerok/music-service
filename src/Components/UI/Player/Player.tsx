import * as React from 'react';

import { IoIosPause, IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { IoIosPlay } from 'react-icons/io';

import styles from './Player.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { setCurrentTrack } from '../../../store/reducers/trackSlice';
import { UPLOADS_API } from '../../../API';

const Player : React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {tracks, currentTrack} = useSelector((state : RootState) => state.tracks)

    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);
    
    React.useEffect(() => {
        if (currentTrack && audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentTrack]);


    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const changeTrack = (direction: 'next' | 'prev') => {
        if (!tracks.length || !currentTrack) return;

        const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
        let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

        if (newIndex >= tracks.length) newIndex = 0;
        if (newIndex < 0) newIndex = tracks.length - 1;

        dispatch(setCurrentTrack(tracks[newIndex]));
    };

    const audioSrc = currentTrack ? `${UPLOADS_API}${currentTrack.audio}` : '';
    const imageSrc = currentTrack ? `${UPLOADS_API}${currentTrack.image}` : '';

    return (
        <div className={styles.player}>
            <div className={styles.player__buttons}>
                <IoIosSkipBackward onClick={() => changeTrack('prev')}/>
                    {isPlaying ? (
                        <IoIosPause onClick={togglePlayPause}/>
                    ) : (
                        <IoIosPlay onClick={togglePlayPause}/>
                    )}
                <IoIosSkipForward onClick={() => changeTrack('next')}/>
            </div>
            <div className={styles.player__info}>
                <div className={styles.player__info_image}>
                    <img src={imageSrc} alt='' />
                </div>
                <div className={styles.player__info_text}>
                    <div className={styles.player__info_text_title}>
                        {currentTrack ? currentTrack?.title : ''}
                    </div>
                    <div className={styles.player__info_text_author}>
                        {currentTrack ? currentTrack?.author : ''}
                    </div>
                </div>
            </div>
            {currentTrack && <audio ref={audioRef} src={audioSrc}/>}
        </div>
    )
}

export default Player;