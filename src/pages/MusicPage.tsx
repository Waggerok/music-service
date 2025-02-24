import * as React from 'react';
import Button from '../Components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchTracks, setCurrentTrack } from '../store/reducers/trackSlice';
import Track from '../Components/UI/Track/Track';

const MusicPage : React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {tracks , loading, error } = useSelector((state : RootState) => state.tracks)

    React.useEffect(() => {
        dispatch(fetchTracks())
    }, [dispatch])

    const handleTrackClick = (trackId : number) => {
        const selectedTrack = tracks.find(track => track.id === trackId);
        if (selectedTrack) {
            dispatch(setCurrentTrack(selectedTrack));
        }
    }

    return (
        <div className='App'>
            <section className='music'>
                <h1 className="music__title">Музыка</h1>
                <div className="music__button">
                    <Button text='Add track'/>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <ul style={{ marginTop: '50px' }}>
                    {Array.isArray(tracks) && tracks.length > 0 ? (
                        tracks.map(track => (
                            <Track title={track.title} author={track.author} image={track.image} key={track.id} onClick={() => handleTrackClick(track.id)}/>
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