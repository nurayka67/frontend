import {memo} from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
}

export const Button = memo(function Button({onClick, label}: ButtonProps) {
    console.log(`Button "${label}" render`);
    return (
        <button 
        onClick={onClick} 
        style={{padding: '5px 10px', 
        margin: '0 5px'}}>
            {label}
        </button>
    );
});