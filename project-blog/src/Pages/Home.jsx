import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Posts from '../Components/Posts'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        {/* Header */}
        <Header/>

        {/* Search */}
        <Search/>

        {/* Posts */}
        <Posts/>

         {/* Blogs */}
         <Blogs/>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home