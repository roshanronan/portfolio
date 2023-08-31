import { BrowserRouter } from "react-router-dom"
import { createContext,useState,useEffect } from "react"

import { Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas,
  Footer
 } from './components'

 export const MobileContext = createContext(false)

const App = ()=>{
  const [isMob,setIsMob] =  useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMob(mediaQuery.matches)
    const handleMediaQueryChanges = (event)=>{
      setIsMob(event.matches)
    }
    mediaQuery.addEventListener('change',handleMediaQueryChanges)

    return()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChanges)
    }
  },[])
 
  return (
<BrowserRouter>
<MobileContext.Provider value={isMob}>
 <div className="relative z-0 bg-primary">
  <div className="bg-hero-pattern bg-cover 
  bg-no-repeat bg-center ">
    <Navbar/>
    <Hero/>
  </div>
  <About/>
  <Experience/>
  <Tech/>
  <Works/>
  {/* <Feedbacks/> */}
  <div className="relative z-0 ">
      <Contact/>
      <StarsCanvas/>
  </div>
    <Footer/>
 </div>
 </MobileContext.Provider>
</BrowserRouter>
  )
}

export default App
