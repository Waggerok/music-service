import * as React from 'react';
import Button from '../Components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchTracks } from '../store/reducers/trackSlice';
import Player from '../Components/UI/Player/Player';

const MusicPage : React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {tracks , loading, error } = useSelector((state : RootState) => state.tracks)

    React.useEffect(() => {
        dispatch(fetchTracks())
    }, [dispatch])

    return (
        <div className='App'>
            <section className='music'>
                <h1 className="music__title">Музыка</h1>
                <div className="music__button">
                    <Button text='Add track'/>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <ul>
                    {Array.isArray(tracks) && tracks.length > 0 ? (
                        tracks.map(track => (
                            <li key={track.id}>{track.title} - {track.author}</li>
                        ))
                    ) : (
                        <p>No tracks found</p>
                    )}
                </ul>
            </section>
        </div>
    )
}

export default MusicPage;