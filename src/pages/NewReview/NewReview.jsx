import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import styles from './NewReview.module.css'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import * as reviewService from '../../services/reviewService'



const NewReview = (props) => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  const [formData, setFormData] = useState({
    review: '',
  })

  // const [validForm, setValidForm] = useState(false)
  
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  
  const formElement = useRef()
  
  // useEffect(() => {
  //   formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  // }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    // call some function that sends formData somewhere
    props.handleAddReview(formData)
  }
  return (
    <>
    <main className={styles.container}>
    <section className={styles.about}>
          <header>
          <div className="text-center mt-5">
            <img src="../truck-fast-solid.svg" alt="Pizza Truck Logo"/>
          </div>  
          <h1>Pizza Pirates</h1>
          </header>
          <h6 className="mb-3">
          Thank you for ordering with Pizza Pirates.
          </h6>
          <h6 className="mb-3">Your order has been submitted and will be ready in 30 minutes.</h6>
          <h6 className="mb-3">Please leave us a review:</h6>
           
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className={styles.inputContainer}>
        <input
          className="reviewForm"
          placeholder="Write a Review"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          id="reviewInput"
          name="review"
        />
      </div><br />
      <div className="text-center">
        {/* <Link to='/reviewList'> */}
        <button type="submit" className={styles.reviewSubmitBtn} id={styles['sign-b']}>
          Submit Review
        </button>
        {/* </Link> */}
      </div> 
    </form>
    
    <p className='mt-5'>Powered by Food Runner, Inc. ©</p>
      </section>
    </main>
  </>  
  )
}

export default NewReview