import * as React from 'react';
import Button from '../Components/UI/Button/Button';
import axios from 'axios';
import { API } from '../API';
import { useNavigate } from 'react-router-dom';


const RegistrationPage : React.FC = () => {

    const navigate = useNavigate();

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const registrateUser = async(event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            const response = await axios.post(`${API}user/createUser`, {
                login,
                password
            })
            console.log('user registred',response.data)
        } catch (error) {
            console.error('Не удалось зарегистрировать пользователя', error);
        }
    }


    return (
            <section className='registration'>
                <h1>Music App</h1>
                <form onSubmit={registrateUser} style={{ display : 'flex', flexDirection : 'column', alignItems : 'center' }}>
                    <div className="registration__inputs">
                        <input 
                            type="text"
                            placeholder='Login'
                            onChange={(e) => setLogin(e.target.value)}
                            required
                            name='login'
                        />
                        <input 
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            name='password'
                        />
                    </div>
                    <div className="registration__button">
                        <Button 
                            text='Зарегистрироваться'
                            type='submit'
                            onClick={() => {
                                setTimeout(() => {
                                    navigate('/music')
                                },2000)
                            }}
                        />
                    </div>
                </form>
            </section>
    )
}

export default RegistrationPage;