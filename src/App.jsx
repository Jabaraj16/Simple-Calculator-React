import { FloatingLabel,Form } from 'react-bootstrap';
import './App.css'
import React, { useState } from 'react';
function App() {
  const [input, setInput] = useState('');
  const btnClick=(value)=>{
    if(value=== '='){
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    }else if (value === 'AC') {
      setInput('');

    } 
    else if(value==='DEL'){
      setInput(input.slice(0,-1))
    }
    else {
      setInput((prevInput) => prevInput + value);
    }
  }
  

  return (
    <>
    <div className='d-flex justify-content-center  bg-warning' style={{height:'50px',textShadow:'1px 1px 2px'}}><h2>Simple Calculator</h2></div>
     <div  className=" w-100 d-flex justify-content-center  bg-warning" style={{height:'100vh'}}>
      
      <div className='mt-5 border rounded    bg-white' style={{width:'350px',height:'500px'}}>
        
      <div className='container-fluid ms-3 d-flex justify-content-center flex-column'>
        <div className=' mt-5 ' style={{width:'90%'}}>
          <input type="text" value={input} className='form-control text-end bg-black text-white fs-3' style={{height:'70px'}}/>
        </div>
        <div className=' w-100 '>
        <div className="buttons mt-2 ">
            <button className='btn border fw-bolder' style={{width:'120px',height:'60px'}}  onClick={()=>btnClick("AC")} >AC</button>
            <button className='btn border ms-4 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('DEL')}>DEL</button>
            <button className='btn border ms-4 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('/')}>/</button>
      </div>
      <div className="buttons2 mt-2 ">
            <button className='btn border fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('7')}>7</button>
            <button className='btn border ms-3 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('8')}>8</button>
            <button className='btn border ms-3 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('9')}>9</button>
            <button className='btn border ms-3 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('*')}>*</button>
      </div>
      <div className="buttons3 mt-2 ">
            <button className='btn border fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('4')}>4</button>
            <button className='btn border ms-3 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('5')}>5</button>
            <button className='btn border ms-3 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('6')}>6</button>
            <button className='btn border ms-3 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('+')}>+</button>
      </div>
      <div className="buttons4 mt-2 ">
            <button className='btn border fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('1')}>1</button>
            <button className='btn border ms-3 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('2')}>2</button>
            <button className='btn border ms-3 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('3')}>3</button>
            <button className='btn border ms-3 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('-')}>-</button>
      </div>
      <div className="buttons mt-2 ">
            <button className='btn border  fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('0')}>0</button>
            <button className='btn border ms-3 fw-bolder'style={{width:'60px',height:'60px'}} onClick={()=>btnClick('.')}>.</button>
            <button className='btn border fw-bolder ms-4' style={{width:'120px',height:'60px'}} onClick={()=>btnClick("=")} >=</button>
      </div>
        </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
