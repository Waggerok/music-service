import * as React from 'react';
import styles from './Button.module.css'

interface IButtonProps {
    text : string
}

const Button : React.FC<IButtonProps> = (props) => {
    return (
        <button 
        className={styles.button}
        >
            {props.text}
        </button>
    )
}

export default Button;