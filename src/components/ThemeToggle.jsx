import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [light, setLight] = useState(false)
  useEffect(()=>{
    const saved = localStorage.getItem('theme')
    if(saved==='light'){ document.documentElement.classList.add('light'); setLight(true) }
  },[])
  const toggle = () => {
    document.documentElement.classList.toggle('light');
    const nowLight = document.documentElement.classList.contains('light')
    setLight(nowLight)
    localStorage.setItem('theme', nowLight ? 'light' : 'dark')
  }
  return (
    <button onClick={toggle} className="btn text-sm" aria-pressed={light}>
      {light ? 'Dark' : 'Light'} Mode
    </button>
  )
}
