import * as React from 'react';
import Button from '../Components/UI/Button/Button';

const RegistrationPage : React.FC = () => {
    return (
        <div className='App'>
            <section className='registration'>
                <h1>Music App</h1>
                <div className="registration__inputs">
                    <input 
                        type="text"
                        placeholder='Login'
                    />
                    <input 
                        type='password'
                        placeholder='Password'
                    />
                </div>
                <div className="registration__button">
                    <Button text='Зарегистрироваться'/>
                </div>
            </section>
        </div>
    )
}

export default RegistrationPage;