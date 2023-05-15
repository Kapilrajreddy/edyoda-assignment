import React, {useState} from 'react'

import './index.css'
import { BsCheckLg } from "react-icons/bs";

const Content =()=>{

    const [price,setPrice] = useState(179)

    const textField2=()=>{
        setPrice(179)
    }
    const textField3=()=>{
        setPrice(149)
    }
    const textField4=()=>{
        setPrice(99)
    }
    return (
        <div class="content-bg">
            <div class="main-lookup">
                <div class="header">
                    <div class="frame-1">
                        <p class="frame-1-text">Access curated courses worth</p>
                    </div>
                    <div class="frame-2">
                        <p class="price-1">₹ 18,500</p>  
                        <p class="rectangle"></p>
                        <div class="frame-3">
                            <p class="at-just">at just</p>
                        </div>
                        <div class="frame-4">
                            <p class="discount">₹ 99</p>
                        </div>
                        <div class="frame-5">
                            <p class="per-year">per year!</p>
                        </div>
                    </div>
                    
                    
                </div>
                <div class="detailes-container">
                    <img src="https://res.cloudinary.com/dwsrrlpjl/image/upload/v1684059864/Group_20_jsflsp.png" alt="logo1" class="course-icon"/>
                    <p class="course-type"><span class="course-numbers">100+ </span>Job relevant courses</p>
                </div>
                <div class="detailes-container">
                    <img src="https://res.cloudinary.com/dwsrrlpjl/image/upload/v1684060357/Group_19_rn1klj.png" alt="logo2" class="course-icon"/>
                    <p class="course-type"><span class="course-numbers">20,000+ </span>Hours of content</p>
                </div>
                <div class="detailes-container">
                    <img src="https://res.cloudinary.com/dwsrrlpjl/image/upload/v1684060490/Group_16_lwc4l1.png" alt="logo3" class="course-icon"/>
                    <p class="course-type"><span class="course-numbers">Exclusive </span>webinar access </p>
                </div>
                <div class="detailes-container">
                    <img src="https://res.cloudinary.com/dwsrrlpjl/image/upload/v1684060644/Group_17_ougrkx.png" alt="logo4" class="course-icon"/>
                    <p class="course-type">Scholarship worth <span class="course-numbers">₹94,500 </span> </p>
                </div>
                <div class="detailes-container">
                    <img src="https://res.cloudinary.com/dwsrrlpjl/image/upload/v1684060765/Group_15_hmwrwf.png" alt="logo5" class="course-icon"/>
                    <p class="course-type"><span class="course-numbers">Ad Free </span>learning experience</p>
                </div>
            </div>
            <div class="form-container">
                <div class="progress-bar">
                    <div class="stage-1">
                        <p class="sign-up-icon">
                            1                      
                        </p>
                        <p class="sign-up">Sign Up</p>                       
                    </div>
                    <div class="stage-1">
                        <p class="sign-up-icon">
                            2                     
                        </p>
                        <p class="sign-up">Subscribe</p>
                    </div>
                </div>
                <div class="form-header">
                    <p class="form-header-text">Select your subscription plan</p>
                </div>
                <div class="input-container">
                    <div class="text-field-1">
                        <div class="radio-button-container">
                            <div class="radio-button-1">
                                <p class='radio-button-circle'></p>
                            </div>
                        </div>
                        <div class="text-container-1">
                            <p class="subscription-1">12 Months Subscription</p>
                            <div class="right-text-container">
                                <div class="top-text">
                                    <p class="total-amount-name">Total</p>
                                    <p class="total-amount">₹99</p>
                                </div>
                                <div class="bottom-text">
                                    <p class="amount-per-month">₹8</p>
                                    <p class="per-month-text">/mo</p>
                                </div>
                            </div>
                        </div>
                        <div class="tag-1">
                            Offer expired
                        </div>
                    </div>
                    <div class="text-field-2" onClick={textField2}>
                        <div class="radio-button-container-1">
                            <p class="radio-button-circle-1"><BsCheckLg/></p>
                        </div>
                        <div class="text-container-2">
                            <p class="subscription-2">12 Months Subscription</p>
                            <div class="right-text-container-1">
                                <div class="top-text-1">
                                    <p class="total-amount-name-1">Total</p>
                                    <p class="total-amount-1">₹179</p>
                                </div>
                                <div class="bottom-text-1">
                                    <p class="amount-per-month-1">₹15</p>
                                    <p class="per-month-text-1">/mo</p>
                                </div>
                            </div>
                        </div>
                        <div class="tag-2">
                            Recommended
                        </div>
                    </div>
                    <div class="text-field-3" onClick={textField3}>
                        <div class="radio-button-container">
                            <div class="radio-button-1">
                                
                            </div>
                        </div>
                        <div class="text-container-2">
                            <p class="subscription-2">6 Months Subscription</p>
                            <div class="right-text-container-1">
                                <div class="top-text-1">
                                    <p class="total-amount-name-1">Total</p>
                                    <p class="total-amount-1">₹149</p>
                                </div>
                                <div class="bottom-text-1">
                                    <p class="amount-per-month-1">₹25</p>
                                    <p class="per-month-text-1">/mo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-field-3" onClick={textField4}>
                        <div class="radio-button-container">
                            <div class="radio-button-1">
                                
                            </div>
                        </div>
                        <div class="text-container-2">
                            <p class="subscription-2">3 Months Subscription</p>
                            <div class="right-text-container-1">
                                <div class="top-text-1">
                                    <p class="total-amount-name-1">Total</p>
                                    <p class="total-amount-1">₹99</p>
                                </div>
                                <div class="bottom-text-1">
                                    <p class="amount-per-month-1">₹33</p>
                                    <p class="per-month-text-1">/mo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="summary-container">
                    <div class="subscription-text-container">
                        <p class="subscription-fee-name">Subscription Fee</p>
                        <p class="subscription-fee-amount">₹18,500</p>
                    </div>
                    <div class="alert-container">
                        <div class="alert-header">
                            <p class="limited-offer">Limited time offer</p>
                            <p class="limited-offer-discount">- ₹18,401</p>
                        </div>
                        <div class="alert-body">
                            <div class="alert-icon-container">
                                <img src="https://res.cloudinary.com/dwsrrlpjl/image/upload/v1684131947/Vector_1_jnjcy0.png" alt="alert" class="alert-icon"/>
                            </div>
                            <p class="alert-text">Offer valid till 25th March 2023</p>
                        </div>
                    </div>
                    <div class="gst-container">
                        <p class="gst-text">Total (Incl. of 18% GST)</p>
                        <p class="gst-price">₹{price}</p>
                    </div>
                </div>
                <div class="button-container-1">
                
                    <button class="secondary-button">CANCEL</button>
                    <button class="primary-button">proceed to pay</button>

                </div>
                <div class="payment-container">
                    <img src="https://res.cloudinary.com/dwsrrlpjl/image/upload/v1684133376/Razorpay_Icon_gm0wan.png" alt="razerpay"/>
                </div>
            </div>
        </div>
    )
}
export default Content