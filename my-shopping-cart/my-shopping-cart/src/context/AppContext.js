import {createContext,useState} from 'react'
import { PRODUCT } from '../CartData'
export const AppContext = createContext(null)
const AppContextProvider = ({children}) => {
    
    const getDefaultCart = () =>{
        let cart = {}
        for(let i = 1;i < PRODUCT.length+1;i++){
            cart[i] = 0;
        }
        return cart
        
    }
    const [cartItems,setCartItems] = useState(getDefaultCart())
    const [cartData,setCartData] = useState([])
    const addItems = (itemId)=>{
        return setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeItems = (itemId)=>{
        return setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
    }


    const addToCart = (Id) => {
        let filteredItem = PRODUCT.filter((value) => {
          return value.id === Id
        })
        //This code uses the some method to check if an
        //item has all been added to the array using an id to test
        let itemExits = cartData.some((item) => item.id === Id)
      
        if (!itemExits) {
          return setCartData([...cartData, ...filteredItem])
        } else {
           return false
        }
      }
      
      
      
    const removeFromCart = (Id)=>{
        let filteredItem = cartData.filter((value)=>{
            return value.id !== Id
        })
        return setCartData([...filteredItem])
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (let item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCT.find((product)=> product.id === Number(item))
                
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
       
        return totalAmount
    }
  
    console.table(cartData)
    const contextValue = {
        cartItems,
        addItems,
        removeItems,
        cartData,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}


export default AppContextProvider