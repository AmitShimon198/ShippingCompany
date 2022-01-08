import { FunctionComponent } from "react";
import styles from "./Button.module.css";
interface ButtonProps {
    primary: boolean;
    big: boolean;
    bigFont: boolean;
    onHover: () => void;
    onClickHandler: (event: any) => void;
    dark: boolean;
    disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ disabled, primary, big, bigFont, children, onHover, dark, onClickHandler }) => {
    return (<>
        <button
            disabled={disabled}
            className={`${styles.button} ${primary && styles.primary} ${big && styles.big} ${bigFont && styles.fontBig} ${dark && styles.dark}`}
            onClick={onClickHandler}
            onMouseEnter={onHover}
            onMouseLeave={onHover}>
            {children}
        </button>
    </>);
}

export default Button;