import { FunctionComponent } from "react";
import classes from './Header.module.css';
interface HeaderProps {
    headerText: string;
    imageSrc: string;
    imageAlt: string;
}

const Header: FunctionComponent<HeaderProps> = ({ headerText, imageSrc, imageAlt }) => {
    return (<div className={classes.headerContainer}>
        <h1 className={classes.header}>{headerText}</h1>
        <img className={classes.costImg} alt={imageAlt} src={imageSrc } />
    </div>);
}

export default Header;