import './checkout.css'

function CheckoutPage() {
  return <>
  <div className='flex align-center justify-center'>
     <div className="cardss flex justify-center text-center">
        <div className='extra flex justify-center'>
          <i className="checkmark">✓</i>
        </div>
        <h1 className='success'>Success</h1> 
        <p className='para'>We received your purchase request;<br/> we will be in touch shortly!</p>
      </div>
  </div>
  </>
}

export default CheckoutPage;
