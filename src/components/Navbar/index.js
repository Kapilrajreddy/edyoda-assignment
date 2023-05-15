import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

import './index.css'

const Navbar = ()=>{

    return (
        <div class="navbar">
            <div class="container">
                <div class="left-container">
                    <div class="logo-container">
                        <p class="logo">Edyoda</p>
                    </div>
                    <div class="course-container">
                        <p class="courses">Course</p>
                        <div class="icon-container">
                            <i class="icon"><BsChevronDown/></i>    
                        </div>
                        
                    </div>
                    <div class="programs-container">
                        <p class="programs">Programs</p>
                        <div class="icon-container">
                            <i class="icon"><BsChevronDown/></i>    
                        </div>                   
                    </div>    
                </div>
                <div class="right-container">
                    <i class="search-icon"><BsSearch/></i>
                    <p class="login">Login</p>
                    <div class="button-container">
                        <p class="join-button">JOIN NOW</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar