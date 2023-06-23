import './App.css';
import Transaction from './componentss/Transection';
import Formcomponent from './componentss/FormComponent';
import React, {  useState,useEffect } from 'react';
import DataContext from './Data/DataContext';
import ReportComponent from './componentss/ReportComponent';
import {BrowserRouter,NavLink,Routes,Route } from "react-router-dom"
function App() {
  const design = {color : 'red',textAlign : 'center',fontSize : '1.5rem'}
  const Activeclassname = "nav-active"

  const initstate = [
    {id:1,title:"ค่าบ้าน",amount:-2000},
    {id:2,title:"เงินเดือน",amount:992000},
    {id:3,title:"ค่ารถ",amount:-32000}
  ]
  const [items,setItems] = useState(initstate)

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
   
    setReportIncome(income)
    setReportExpense(expense)
   },[items,reportIncome,reportExpense])

  
  return (
    <BrowserRouter>
       
    <DataContext.Provider value={
          {  
            income : reportIncome,
            expense: reportExpense     
          } 
    }>
      <div className="contianer">
            <h1 style={design}> แอพบัญชีรายรับ - รายจ่าย</h1>
        <nav className='navpath'>
              <NavLink  end to = "/" className={({isActive}) => isActive ? Activeclassname : undefined}>แสดงข้อมูล</NavLink>
              <NavLink to = "/insert" className={({isActive}) => isActive ? Activeclassname : undefined}>กรอกข้อมูล</NavLink>
        </nav>
      <Routes> 
          <Route>
              <Route path='/' element={<ReportComponent/>}/>
              <Route path='/insert' element={<><Formcomponent onAddItem={onAddNewItem}/><Transaction items = {items}/></>}/>
          </Route>
      </Routes>      
              
              
          
      </div>
    </DataContext.Provider>
    
    </BrowserRouter>
  );
}

export default App;
