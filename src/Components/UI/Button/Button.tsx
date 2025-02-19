import * as React from 'react';
import styles from './Button.module.css'

interface IButtonProps {
    text : string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

const Button : React.FC<IButtonProps> = ({ text, onClick }) => {
    return (
        <button 
            className={styles.button}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;