import { Avatar } from '@/app/components/Avatar'
import { Checkbox } from '@/app/components/Checkbox'
import React from 'react'

const FormCard = () => {
  return (
    <div className="bg-white rounded-lg pt-4 pb-10 pl-5 pr-8">
      <div className="flex items-center justify-between">
        <h3 className="text-4xl text-han-purple font-normal mb-4">December 20, 2024</h3>
        <button className="button primary outline">+ Message</button>
      </div>
      <p className="text-han-purple mb-6"><strong>2</strong> of <strong>3</strong> Slots Filled</p>
      <div className="grid grid-cols-[150px_1fr] gap-10">
        <div><Checkbox label="Drinks" name="drinks" defaultValue={false} /></div>
        <div className="flex items-center gap-3">
          <Avatar src="https://picsum.photos/seed/1744053428295/62/62" alt="Avatar" size={32} />
          <div className="text-xl text-han-purple">Danielle Smith</div>
        </div>
      </div>
    </div>
  )
}

export { FormCard }