import { useState } from 'react'
import PlusIcon from '../Icons/PlusIcon'
import ShareIcon from '../Icons/ShareIcon'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModel } from '../components/ui/CreateContentModel'
import { Sidebar } from '../components/ui/Sidebar'

const contentType = ['Youtube Video', 'Tweet', 'Docs', 'Others']

//working on Frontend 8/7/25 will finish it today
export default function Dashboard() {
  const [modal,setModal] =useState(false)

  return (
    <div>
      <CreateContentModel open={modal} onClose={()=>{
       setModal(false)
     }} ></CreateContentModel>
        <Sidebar></Sidebar>
   <div className='pl-72 h-screen bg-white-900 '>
   
      <div className='flex justify-end'>
        <Button variant ="primary" text="Add To Brain" size='md' onClick={()=>{
          setModal(true)
        }} startIcon={< PlusIcon size={"md"}  />} 
        ></Button>  
        <Button variant ="secondary" text="Share Brain" size='md' startIcon={< ShareIcon size="md"   />} 
        ></Button>  
      </div>
    <div className='flex p-2 m-2 gap-4 flex-wrap'>
      <Card type={contentType[0]} title="Recursion" link="https://www.youtube.com/live/y7XMDKwTQxY?feature=shared" text="Youtube Vid" ></Card>
      <Card type={contentType[0]} title="Recursion" link="https://www.youtube.com/watch?v=l8X9nhgZyoA" text="Youtube Vid" ></Card>
      <Card type={contentType[0]} title="kirtan" link="https://www.youtube.com/live/47lijcY9SZY" text="Youtube Vid" ></Card>
      <Card type ={contentType[1]} title={contentType[1]} link="https://x.com/Guraasees_Singh/status/1948774810130993489" text={contentType[1]} ></Card>
      <Card type={contentType[0]} title="kirtan" link="https://www.youtube.com/live/47lijcY9SZY" text="Youtube Vid" ></Card>
      <Card type ={contentType[1]} title={contentType[1]} link="https://x.com/Guraasees_Singh/status/1948774810130993489" text={contentType[1]} ></Card>
      <Card type={contentType[0]} title="Recursion" link="https://www.youtube.com/live/y7XMDKwTQxY?feature=shared" text="Youtube Vid" ></Card>
      <Card type={contentType[0]} title="kirtan" link="https://www.youtube.com/live/47lijcY9SZY" text="Youtube Vid" ></Card>
      <Card type ={contentType[1]} title={contentType[1]} link="https://x.com/Guraasees_Singh/status/1948774810130993489" text={contentType[1]} ></Card>
    
    </div>
    </div>
    </div>
  )
}


