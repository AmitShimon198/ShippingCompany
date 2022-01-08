import { FunctionComponent, useState } from "react";
import { calculatorMainCategories, subCategories } from "../../utils/tempData";
import Header from "../ui/header/Header";
import Input from "../ui/input/Input";
import Select from "../ui/select/Select";
import classes from './CostCalculator.module.css';
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import Button from "../ui/button/Button";
interface CostCalculatorProps {

}

const headerText = 'מחשבון משלוח';
const giloyNaot = '* המחשבון מציג הערכת מחיר, העלות הסופית תחושב כאשר החבילה תגיע למחסנים.';
const calculateButtonText = 'קבל הצעה';
const clearButtonText = 'נקה טופס';
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
    const [hover, setHover] = useState<boolean>(false);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const onHover = () => {
        setHover((prev) => !prev);
    };

    const onMainCategorySelected = (value: string) => {
        setIsDirty(true);
        setProductDetails(prev => ({ ...prev, mainCategory: value }))
    }

    const onSubCategorySelected = (value: string) => {
        setIsDirty(true);
        setProductDetails(prev => ({ ...prev, subCategory: value }))
    }

    const onInputChange = ({ name, value }: { name: string; value: any }) => {
        setIsDirty(true);
        setProductDetails(prev => ({ ...prev, [name]: +value }))
    }

    const onStartCalculation = (event: any) => {
        console.log('start calculate', productDetails);
        console.log('finish calculate');
        resetForm();
    }

    const resetForm = () => {
        console.log('reset calculate');
        setIsDirty(false);
        setProductDetails(initialCalcState);
    }

    return (<>
        <Header imageAlt="Cost Icon" imageSrc="https://shipo.co.il/5a773b67b636d95a473087e3f7a21013.png" headerText={headerText} />
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <div className={classes.buttonContainer}>
                    <Button disabled={!isDirty} onClickHandler={onStartCalculation} primary={false} dark={false} big={false} bigFont={false} onHover={onHover}>
                        {calculateButtonText}
                        {hover ? (
                            <MdArrowForward className={classes.ArrowForward} />
                        ) : (
                            <MdKeyboardArrowRight className={classes.ArrowRight} />
                        )}
                    </Button>
                    <Button disabled={!isDirty} onClickHandler={resetForm} primary={false} dark={false} big={false} bigFont={false} onHover={onHover}>
                        {clearButtonText}
                        {hover ? (
                            <MdArrowForward className={classes.ArrowForward} />
                        ) : (
                            <MdKeyboardArrowRight className={classes.ArrowRight} />
                        )}
                    </Button>
                </div>
                <div className={classes.inputsContainer}>
                    <div className={classes.selectContainer}>
                        {<Select value={productDetails.subCategory} handelChange={onSubCategorySelected} selectOptions={subCategories[productDetails?.mainCategory] || [defaultSelectPlaceholder]} />}
                        {calculatorMainCategories && <Select value={productDetails.mainCategory} handelChange={onMainCategorySelected} selectOptions={calculatorMainCategories} />}
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