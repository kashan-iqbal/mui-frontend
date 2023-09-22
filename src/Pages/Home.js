import React from 'react'
import Layout from '../Component/Layout'
import "../Styles/Home.css"
import { Link } from 'react-router-dom'
import banner from "../assets/banner.jpeg"

const Home = () => {
  return (
    <Layout>
      
      <div className='home_container'style={{backgroundImage:`url(${banner})`}} >
        <div className='headreContainer'>
   <h1> Food website</h1>
   <p>Best Food in pakistan</p>
   <Link to={"/menu"}>
   <button>
    Order Now
   </button>
   
   </Link>
        </div>

      </div>
      </Layout>
  )
}

export default Home