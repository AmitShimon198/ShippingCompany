import { FunctionComponent } from "react";
import CostTable from "./CostTable";
import classes from './CostEvaluation.module.css';
import CostCalculator from "./CostCalculator";
import Header from "../ui/header/Header";
interface CostEvaluationProps {
    costData: { price: number; currency: string; weight: number }[]
}
const costTableHeader = 'מחירים לפי משקל';
const shippingCostHeader = 'חישוב עלויות שילוח';
const CostEvaluation: FunctionComponent<CostEvaluationProps> = ({ costData }) => {

    const splitToChunks = (array: any[], parts: number) => {
        const oldArr = [...array];
        let result = [];
        for (let i = parts; i > 0; i--) {
            result.push(oldArr.splice(0, Math.ceil(oldArr.length / i)));
        }
        return result;
    }
    const chunksArr = splitToChunks(costData, costData.length / 10);
    return (<>
        <div className={classes.container}>
            <Header center={true} headerText={shippingCostHeader} />
            <hr />
            <CostCalculator />
            <Header imageAlt="Cost Icon" imageSrc="https://shipo.co.il/73b6636b43b01205d470dd4faa2c5753.png" headerText={costTableHeader} />
            <CostTable tableData={chunksArr} />
        </div>
    </>
    );
}

export default CostEvaluation;
