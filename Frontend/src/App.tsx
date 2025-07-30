
import './App.css'
import PlusIcon from './components/Icons/PlusIcon'
import ShareIcon from './components/Icons/ShareIcon'
import { Button } from './components/ui/Button'

function App() {
  

  return (
    <>
    <Button variant ="primary" text="Continue" size='lg' startIcon={< PlusIcon size={props}  />} 
    onClick={()=>(alert("Button Clicked Paise daldo iske abb"))}></Button>  
    <Button variant ="secondary" text="2ndue" size='sm' startIcon={< ShareIcon size="md"   />} 
    onClick={()=>(alert("Button Clicked Paise nikalo iske abb"))}></Button>  
    </>
  )
}

export default App
//try to same sm of button come to icons size as well
//declare from global for ts ignore removal 
//complete backend apis

