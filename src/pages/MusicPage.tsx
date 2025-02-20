import * as React from 'react';
import Button from '../Components/UI/Button/Button';

const MusicPage : React.FC = () => {
    return (
        <div className='App'>
            <section className='music'>
                <h1 className="music__title">Музыка</h1>
                <div className="music__button">
                    <Button text='Add track'/>
                </div>
            </section>
        </div>
    )
}

export default MusicPage;