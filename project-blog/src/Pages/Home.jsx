import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Search from '../Components/Search'
import Posts from '../Components/Posts'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        {/* Header */}
        <Header/>

        {/* Sidebar*/}
        <Sidebar/>

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