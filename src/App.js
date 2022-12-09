import './styles/index.css'

import initialStoreItems from './store-items'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}
What should a cart item look like? 🤔
*/
import Store from './Store'
import { useState } from 'react'
import Cart from './Cart'
import Total from './Total'

console.log(initialStoreItems)

function App() {

  const [cart, setCart] = useState([])
 
  function addToCart(item) {

    const itemFound = cart.find(inCartItem => inCartItem.id === item.id)
    if (itemFound) {

      const found = cart.filter(inCartItem => inCartItem.id !== item.id)
      itemFound.quantity += 1
      setCart([...found, itemFound])

} else {
      const cartItems = { ...item, quantity: 1 }
      setCart([...cart, cartItems])
    }
  }

  const handleIncrement = item => {
    const updatedCart = cart.map(cartItems => {
      if (item.id === cartItems.id) {
        return { ...cartItems, quantity: ++cartItems.quantity }
      }
      return cartItem
    })
    setCart(updatedCart)
  }

  const handleDecrement = item => {
    const updatedCart = cart.map(cartItems => {
      if (item.id === cartItems.id) {
        const itemFound = { ...cartItems, quantity: --cartItems.quantity }
        if (item.quantity === 0) {
          return null

        } else {
          return itemFound
        }
      }
      return cartItems
    })
    setCart(updatedCart.filter(item => item !== null))
  }
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* Wrtite some code here... */}
        </ul>
        <Store addToCart={addToCart} />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Wrtite some code here... */}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
        <Cart
          cart={cart}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />

        <Total cart={cart} />
      </main>
      <div>

        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
export default App
