import { useContext } from "react"
import UserContext from "../../Context/UserContext"
import { Redirect } from "react-router-dom";

const Cart = () => {

    const context = useContext(UserContext);

    if(context.Id === null){
        return <Redirect to="/"/>
    }
    
    return (
        <div>
            <h1>This Cart</h1>
        </div>
    )
}

export default Cart