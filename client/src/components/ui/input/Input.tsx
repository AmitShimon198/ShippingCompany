import { FunctionComponent, useState } from "react";
import classes from './Input.module.css';
interface InputProps {
    onInputChange: (event: any) => void;
    name?: string;
    type?: string;
    label?: string;
    placeholder?: string;
    value?: any;
}

const Input: FunctionComponent<InputProps> = ({ onInputChange, name, type, placeholder, value, label }) => {
    const [isBlur, setIsBlur] = useState<boolean>(false);
    const onChangeHandler = ({ target }: { target: any }) => {
        onInputChange({ name: target.name, value: target.value })
    }
    const toggleLabel = () => setIsBlur(prev => !prev);
    return (
        <div className={classes.inputContainer}>
            <label className={isBlur || value ? classes.label_blur : classes.label}>{label}</label>
            <input className={classes.input} onFocus={toggleLabel} onBlur={toggleLabel} placeholder={placeholder} type={type} name={name} onChange={onChangeHandler} value={value ? value : ''} />
        </div>
    );
}

export default Input;