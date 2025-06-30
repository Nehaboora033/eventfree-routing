import React from 'react'
import Joinus from '../components/Joinus'
import Exploreevents from '../components/Exploreevents'
import Bluesection from '../components/Bluesection'
import Makeusspecial from '../components/Makeusspecial'
import Homehersection from '../components/Homehersection'

const Home = () => {
  return (
    <>
      <Homehersection />
      <Makeusspecial />
      <Bluesection />
      <Exploreevents />
      <Joinus />
    </>
  )
}

export default Home