import React, {useState} from 'react'


// This component shows an example of how to use the increament and decreament button
const Button = _ => {
    const [number,setNumber] = useState(0)

    const increment = _ =>{
        setNumber(number + 1)
    }
    const decrement = _ =>{
        if(number>0)
        setNumber(number - 1)
      
    }
    return (
      
        <>
            <div className='container'>
                <button className='btn' onClick={decrement}>-</button>
                <p>{number}</p>
                <button className='btn' onClick={increment}>+</button>
            </div>
        </>

    )
}


/*
This example shows how to input text and manimpulate them using 
{clear,preview,letter and word func.
    
*/
const Text = _ =>{

const [text,clearText] = useState("Type your text here.")
const [preData,setPreData] = useState("")
const clear = _ =>{
    clearText("")
 
}
const changeText =  function(event){
    clearText(event.target.value)
    
}
const setPreview = _ =>{
    setPreData(text)

}
let letters = text.length
let words = text.split(' ').length

    return(
        <>
       
        <div className='container text-area'>
            <textarea rows="50" cols="50" value={text} onChange={changeText}>{text}</textarea>
            <div className='side-text'>
            <button className='btn btn-text' onClick={clear}>clear</button>
            <p id="pre-text">{preData}</p>
            <button className='btn btn-text'onClick={setPreview} >preview</button>
            </div>
            <div className='side-text side-right'>
                <p id="Num-let">{letters} are the total number of letters entered</p>
                <p id="Num-word">{words} are the total words you have entered</p>
            </div>
            
        </div>
        </>
    )
   
}
// creating a setTime function using setInterval to up date to current time

const Time = () =>{
    let input = new Date().toLocaleTimeString()
    const [time,upTime] = useState(input);
    
    let hr,min,sec,date;
    date = new Date()
    hr = date.getHours()
    min = date.getMinutes() 
   sec = date.getSeconds()

    const upDateTime =_=>{
        let output = new Date().toLocaleTimeString()
        upTime(output)
    }
    setInterval(upDateTime,1000);
    return(
        <>
         <h1>{time}</h1>
         <h2>{hr}</h2>
         <h3>{min}</h3>
         <h4>{sec}</h4>
         
        </>
       
    )
}

export default Button;
export {Text,Time};