import * as React from 'react';

const RegistrationPage : React.FC = () => {
    return (
        <div className='App'>
            <section className='registration'>
                <h1>Music App</h1>
                <div className="registration__inputs">
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className="registration__button">
                    <button>Авторизироваться</button>
                </div>
            </section>
        </div>
    )
}

export default RegistrationPage;