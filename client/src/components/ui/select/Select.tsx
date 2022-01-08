import { FunctionComponent } from "react";
import classes from './Select.module.css'
interface SelectProps {
    selectOptions: { name: string; key: string }[];
    handelChange: (key: string) => void;
    value: string;
}

const Select: FunctionComponent<SelectProps> = ({ selectOptions, handelChange, value }) => {

    const onSelectChange = ({ target }: { target: any }) => {
        handelChange(target.value)
    }

    return (
        <select value={value} disabled={selectOptions.length <= 1} className={classes.select} onChange={onSelectChange} >
            {selectOptions?.map(option => <option key={option.key} value={option.key}>{option.name}</option>)}
        </select>
    );
}

export default Select;