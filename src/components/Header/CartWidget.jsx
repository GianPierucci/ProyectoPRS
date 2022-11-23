import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {totalUnidades} = useContext(CartContext)
    

    return(
        <div className='containerCW'>
            <FontAwesomeIcon className='cartIcon' icon={faCartShopping}/>
            {totalUnidades() === 0 ? "" : <span className="numeroCarrito">{totalUnidades()}</span>}
        </div>
        
    )
}


export default CartWidget; 