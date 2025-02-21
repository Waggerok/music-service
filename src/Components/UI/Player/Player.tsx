import * as React from 'react';

import { IoIosPause } from "react-icons/io";
import { IoIosPlay } from 'react-icons/io';

import styles from './Player.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const Player : React.FC = () => {

    const {tracks, loading, error} = useSelector((state : RootState) => state.tracks)
    const currentTrack = tracks.length > 0 ? tracks[0] : null

    const active = true

    return (
        <div className={styles.player}>
            <div className={styles.player__buttons}>
                {!active
                    ?   <IoIosPlay/>
                    :   <IoIosPause/>
                }
            </div>
            <div className={styles.player__text}>
                <div className={styles.player__text_title}>
                    {currentTrack?.title}
                </div>
                <div className={styles.player__text_author}>
                    {currentTrack?.author}
                </div>
            </div>
        </div>
    )
}

export default Player;