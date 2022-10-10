import "../scss/App.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return(
       <FontAwesomeIcon className='cartIcon' icon={faCartShopping}/>
    )
}

export default CartWidget;