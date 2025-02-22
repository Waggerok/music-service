import * as React from 'react';

import { IoIosPause, IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { IoIosPlay } from 'react-icons/io';

import styles from './Player.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { setCurrentTrack } from '../../../store/reducers/trackSlice';

const Player : React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {tracks, currentTrack} = useSelector((state : RootState) => state.tracks)

    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);
    
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const changeTrack = (direction : 'next' | 'prev') => {
        if (!tracks.length) return

        const currentIndex = tracks.findIndex(track => track.id === currentTrack?.id);
        let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

        if (newIndex >= tracks.length) newIndex = 0;
        if (newIndex < 0) newIndex = tracks.length - 1;

        dispatch(setCurrentTrack(tracks[newIndex]));
        setIsPlaying(true);
        }

    

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
            <div className={styles.player__text}>
                <div className={styles.player__text_title}>
                    {currentTrack ? currentTrack.title : ''}
                </div>
                <div className={styles.player__text_author}>
                    {currentTrack ? currentTrack.author : ''}
                </div>
            </div>
            {currentTrack && <audio ref={audioRef} src={currentTrack.audio}/>}
        </div>
    )
}

export default Player;