import RightSection from "./rightSection"
import LeftSection from "./leftSection"
import { useState } from "react"
import Product from '../Components/jsonData.json'
const MainContent = () =>{
    const [cartegories, setCartegories] = useState(Product);

    return(
        <div className="container-fluid bg-success">
            <LeftSection 
            cartegories={cartegories} 
            setCartegories={setCartegories}
            Product={Product}
            />
            <RightSection cartegories={cartegories} />

        </div>
    )
}
export default MainContent