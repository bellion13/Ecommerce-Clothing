import React from 'react'
import './Shop.css'
import Hero from '../../Components/Hero/Hero'
import Popular from '../../Components/Popular/Popular'
import Offers from '../../Components/Offers/Offers'
import NewCollections from '../../Components/NewCollections/NewCollections'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Footer from '../../Components/Footer/Footer'
const Shop = () => {
  return (
    <>
      <Hero />
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </>
  )
}
export default Shop