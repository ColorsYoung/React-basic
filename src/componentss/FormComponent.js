import { useState,useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid'; // ใช้ในการเจ็น unex id


const Formcomponent = (props) =>{
    // console.log("render From Component")
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)


    const inputTitile = (event)=>{
        setTitle(event.target.value)
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value)
    }
    const saveItem =(event)=>{
        event.preventDefault()

        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
            
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0
        setFormValid(checkData)
    },[title,amount])
    return(
 
        <div>
            <form onSubmit ={saveItem}>
                <div className ="form__control">  
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder = "ระบุรายชื่อของคุณ" onChange={inputTitile} value={title}/>
                </div>
                <div className ="form__control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder = "(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button className="button" type="summit" disabled={!formValid}>ส่งข้อมูล</button>
                </div>
            </form>
        </div>
           
    )
}

export default Formcomponent;