import { FunctionComponent } from "react";
import classes from './Header.module.css';
interface HeaderProps {
    headerText: string;
    imageSrc?: string;
    imageAlt?: string;
    center?: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({ headerText, imageSrc, imageAlt, center }) => {
    return (<div className={classes.headerContainer}>
        <h1 className={`${classes.header} ${center && classes.center}`}>{headerText}</h1>
        {imageAlt && imageSrc && < img className={classes.costImg} alt={imageAlt} src={imageSrc} />}
    </div>);
}

export default Header;