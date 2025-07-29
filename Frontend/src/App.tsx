
import './App.css'
import { Button } from './components/ui/Button'

function App() {
  

  return (
    <>
    <Button variant ="primary" text="Continue" size='lg' startIcon={<>+</>} 
    onClick={()=>(alert("Button Clicked Paise daldo iske abb"))}></Button>  
    <Button variant ="secondary" text="2ndue" size='sm' startIcon={<>-</>} 
    onClick={()=>(alert("Button Clicked Paise nikalo iske abb"))}></Button>  
    </>
  )
}

export default App
