import { FunctionComponent, useState } from "react";
import { calculatorMainCategories, subCategories } from "../../utils/tempData";
import Button from "../button/Button";
import Header from "../ui/header/Header";
import Input from "../ui/input/Input";
import Select from "../ui/select/Select";
import classes from './CostCalculator.module.css';
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
interface CostCalculatorProps {

}

const headerText = 'מחשבון משלוח';
const giloyNaot = '* המחשבון מציג הערכת מחיר, העלות הסופית תחושב כאשר החבילה תגיע למחסנים.';
const buttonText = 'קבל הצעה';
const initialCalcState = {
    price: 0,
    weight: 0,
    height: 0,
    width: 0,
    depth: 0,
    mainCategory: '',
    subCategory: ''
}
const defaultSelectPlaceholder = {
    name: 'בחר סוג מוצר',
    key: 'selectSubProduct'
}
const CostCalculator: FunctionComponent<CostCalculatorProps> = () => {
    const [productDetails, setProductDetails] = useState(initialCalcState);
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover((prev) => !prev);
    };
    const onMainCategorySelected = (value: string) => {
        setProductDetails(prev => ({ ...prev, mainCategory: value }))
    }
    const onSubCategorySelected = (value: string) => {
        setProductDetails(prev => ({ ...prev, subCategory: value }))
    }
    const onInputChange = ({ name, value }: { name: string; value: any }) => {
        setProductDetails(prev => ({ ...prev, [name]: value }))
    }
    return (<>
        <Header imageAlt="Cost Icon" imageSrc="https://shipo.co.il/5a773b67b636d95a473087e3f7a21013.png" headerText={headerText} />
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <div className={classes.buttonContainer}>
                    <Button primary={false} dark={false} big={false} bigFont={false} onHover={onHover}>
                        {buttonText}
                        {hover ? (
                            <MdArrowForward className={classes.ArrowForward} />
                        ) : (
                            <MdKeyboardArrowRight className={classes.ArrowRight} />
                        )}
                    </Button>
                </div>
                <div className={classes.inputsContainer}>
                    <div className={classes.selectContainer}>
                        {<Select handelChange={onSubCategorySelected} selectOptions={subCategories[productDetails?.mainCategory] || [defaultSelectPlaceholder]} />}
                        {calculatorMainCategories && <Select handelChange={onMainCategorySelected} selectOptions={calculatorMainCategories} />}
                    </div>
                    <div className={classes.inputContainer}>
                        <Input type='number' name='weight' onInputChange={onInputChange} value={productDetails.weight} label="משקל" />
                        <Input placeholder="" type='number' name='price' onInputChange={onInputChange} value={productDetails.price} label="מחיר המוצר ב-$" />
                    </div>
                    <div className={classes.inputContainer}>
                        <Input type='number' name='width' onInputChange={onInputChange} value={productDetails.width} label='רוחב' />
                        <Input type='number' name='height' onInputChange={onInputChange} value={productDetails.height} label='גובה' />
                        <Input type='number' name='depth' onInputChange={onInputChange} value={productDetails.depth} label='עומק' />
                    </div>
                </div>

            </div>
            <div className={classes.giloyNaot}>{giloyNaot}</div>
        </div>
    </>);
}

export default CostCalculator;