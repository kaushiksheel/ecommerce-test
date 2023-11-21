"use client"
import React from 'react'
import { AccordianComp } from './accordian'
import { Checkbox } from './checkbox'



export const Sidebar = () => {
    const [isMenChecked,setIsMenChecked]=React.useState(false)
    const [isWomenChecked,setIsWomenChecked]=React.useState(false)

  return (
    <div className=''>
        <AccordianComp title='Gender'>
            <div className="flex flex-col space-y-2">
<Checkbox isChecked={isMenChecked} setIsChecked={setIsMenChecked} id='men' title="Men"/>
<Checkbox isChecked={isWomenChecked} setIsChecked={setIsWomenChecked} id='women' title="Women"/>

            </div>
        </AccordianComp>
    </div>
  )
}
