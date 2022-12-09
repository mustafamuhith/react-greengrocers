function Total(props) {
    const { cart } = props
    const total = cart
      .reduce((calc, item) => calc + item.quantity * item.price, 0)
      .toFixed(2)
  
    return (
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£{total}</span>
        </div>
      </div>
    )
  }
  export default Total