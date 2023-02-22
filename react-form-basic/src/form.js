import React,{useState} from 'react'

const FormInput = () => {
    const [myname,setMyname] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [tel,setTel] =useState("")
    const [newEntry,setNewEntry] =useState([])

    const submitData = (e) =>{
        e.preventDefault()
        if(myname && email && password && tel){
            let id = 0
            for( id in newEntry){
                newEntry.indexOf(id)
            }
            const newData = { 
                id:id,
                myname:myname,
                email:email,
                password:password,
                tel:tel
            }
            setNewEntry([...newEntry,newData]);
            setMyname("")
            setEmail("")
            setPassword("")
            setTel("")
        }else{
            alert('please make sure you fill in all fields')
        }
    }


// Show and Hide password section
    const [showhide,setShowHide] = useState("text")
    const showHide = ()=>{
    if(showhide === "password"){
        setShowHide("text")
    }
    else if(showhide === "text"){
        setShowHide("password")
    }}


  return (
    <>
      <form onSubmit={submitData}>
        <div className='container main-div p-4'>
        <input type="text"  
        placeholder='Enter your name'value={myname} onChange={(e)=>{setMyname(e.target.value)}}
         />

        <input type="email" 
        placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}
        />
         <span className='btn show-hide' onClick={showHide} style={{backgroundColor:'red'}}></span>

        <input type={showhide}  
        placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}
        />

        <input type="tel"  
        placeholder='Enter your mobile number' value={tel} onChange={(e)=>{setTel(e.target.value)}}/>

        <button type="submit" className='btn btn-danger'>Submit</button>
        </div> 
      </form>
      <div>
        {newEntry.map((values)=>{
            return(
                <>
                <h2 key={values.id}>{values.myname}</h2>
                </>
            )     
        })}
      </div>
    </>
  )
}


export default FormInput
