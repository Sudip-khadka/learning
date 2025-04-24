import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HomeComp() {
  return (
    <div className='p-5 flex items-center fixed top-[50px] right-[50px] bg-primary-500 rounded-full text-primary-50'>
      <Link href="/"><Home/></Link>
    </div>
  )
}

export default HomeComp
