import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <Link href={"/home"}>
      <Card/>
        </Link>
    </div>
  )
}

export default page
