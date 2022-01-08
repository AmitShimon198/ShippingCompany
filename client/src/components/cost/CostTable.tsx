import { FunctionComponent } from "react";
import classes from './CostTable.module.css'

interface CostTableProps {
    tableData: { price: number, currency: string, weight: number }[][]
}

const CostTable: FunctionComponent<CostTableProps> = ({ tableData }) => {
    return (
        <div className={classes.container}>
            {tableData.map((chunk, index) => <div key={index + 'cost_col'} style={{ width: 100 / tableData.length + '%' }}>
                <header  className={classes.header} style={{ borderLeft: index === 0 ? '1px solid #fff' : 'none' }}>
                    <div className={`${classes.cell} ${classes.blueText}`}>
                        Price
                    </div>
                    <div className={`${classes.cell}`}>
                        Weight
                    </div>
                </header>
                {chunk.map(({ price, currency, weight }, idx) => (
                    <div key={idx + 'cost_cell'} className={classes.cellContainer} style={{
                        borderLeft: index === 0 ? '1px solid #fff' : 'none'
                    }}>
                        <div className={`${classes.cell} ${classes.blueText}`}>{price} {currency}</div>
                        <div className={`${classes.cell}`}>{weight}</div>
                    </div>
                ))}
            </div>
            )}
        </div>);
}

export default CostTable;
