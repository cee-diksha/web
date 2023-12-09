import React from 'react'
import Header from './components/layout_components/Header'
import Banner from './components/layout_components/Banner'
import Categories from './components/Categories'

const MainLayout = () => {
  return (
    <div class = 'container-fluid' style={{height: "100vh"}}>
      <Header />
      <Categories />
      <Banner />
    </div>
  )
}

export default MainLayout
