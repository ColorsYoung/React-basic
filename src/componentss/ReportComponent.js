import DataContext from "../Data/DataContext"
import { useContext } from "react"
import './ReportComponent.css'
const ReportComponent=()=>{
    const {income , expense}= useContext(DataContext)
    return (
        <div >
            <div className="report-totol">
                <h4>ยอดคงเหลือ (บาท)</h4>
                <h1>{income-expense}</h1>
            </div>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report plus">{income}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report minus">{expense}</p>
                </div>
            </div>
        </div>

    )
}

export default ReportComponent