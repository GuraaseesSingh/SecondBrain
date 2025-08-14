import { useState } from 'react'
import PlusIcon from '../Icons/PlusIcon'
import ShareIcon from '../Icons/ShareIcon'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModel } from '../components/ui/CreateContentModel'
import { Sidebar } from '../components/ui/Sidebar'

const contentType = ['Youtube Video', 'Tweet', 'Docs', 'Others']

// Fake initial data — later you can persist this in DB or localStorage
const initialContent = [
  {
    type: 'Youtube Video',
    title: 'Recursion',
    link: 'https://www.youtube.com/live/y7XMDKwTQxY?feature=shared',
    text: 'Youtube Vid'
  },
  {
    type: 'Youtube Video',
    title: 'Kirtan',
    link: 'https://www.youtube.com/live/47lijcY9SZY',
    text: 'Youtube Vid'
  },
  {
    type: 'Tweet',
    title: 'Tweet',
    link: 'https://x.com/Guraasees_Singh/status/1948774810130993489',
    text: 'Tweet'
  }
]

export default function Dashboard() {
  const [modal, setModal] = useState(false)
  const [content, setContent] = useState(initialContent)

  return (
    <div>
      {/* Controlled modal with onAdd callback */}
      <CreateContentModel
        open={modal}
        onClose={() => setModal(false)}
        onAdd={(newItem) => {
          setContent((prev) => [...prev, newItem])
          setModal(false)
        }}
      />

      <Sidebar />

      <div className='pl-72 h-screen bg-white-900'>
        <div className='flex justify-end'>
          <Button
            variant="primary"
            text="Add To Brain"
            size='md'
            onClick={() => setModal(true)}
            startIcon={<PlusIcon size={"md"} />}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            size='md'
            startIcon={<ShareIcon size="md" />}
          />
        </div>

        <div className='flex p-2 m-2 gap-4 flex-wrap'>
          {content.map((item, idx) => (
            <Card
              key={idx}
              type={item.type}
              title={item.title}
              link={item.link}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


