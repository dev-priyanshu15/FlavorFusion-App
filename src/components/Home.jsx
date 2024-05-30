import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TrendingSlider from './TrendingSlider'

const Home = () => {
  return (
    <>
    <div className="main">
    <Navbar />
    <PopularSlider/>
    <TrendingSlider/>
    </div>
    </>
  );
};

export default Home;