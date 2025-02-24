import * as React from 'react';
import styles from './Track.module.css'
import { UPLOADS_API } from '../../../API';

interface ITrackProps {
    title : string;
    author : string;
    image : string;
    onClick: () => void;
}

const Track : React.FC<ITrackProps>= ({ title, author, image, onClick }) => {
    return (
        <div className={styles.track} onClick={onClick}>
            <div className={styles.track__items}>
                <div className={styles.track__items_image}>
                    <img src={UPLOADS_API+image} alt={`${title} - ${author}`} />
                </div>
                <div className={styles.track__items_text}>
                    <div className={styles.track__items_text_title}>
                        {title}
                    </div>
                    <div className={styles.track__items_text_author}>
                        {author}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track;