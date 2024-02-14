import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  let timeoutId;
const mainRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)
useEffect(()=>{
  const handleScroll = ()=>{
    const thresHold = 360
    const isAboveThresHold = window.scrollY > thresHold

    setIsSticky(isAboveThresHold)


  }
  

 window.addEventListener("scroll",handleScroll)
 return () => {
  window.removeEventListener("scroll", handleScroll)
}
},[])

const handleTop = ()=>{

// mainRef.current.getBoundingClientRect().top
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}
  

  return (
    <>
    
    <nav className={isSticky?"he sticky":""}>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
{isSticky && <button onClick={handleTop} className='StickyButton'>Back To Top</button>}
<main ref={mainRef}>
  <h2>Nav bar will become sticky when it will reach the certain threshold!😎</h2>
</main>
<footer>
    <p>This is the footer. You can add your footer content here.</p>
</footer>
    </>
  )
}

export default App
